const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

function createErrorMessage(message){
  const spanMessage = document.createElement("span");
  spanMessage.className = "error-message-block";
  spanMessage.innerText = message;
  return spanMessage;
}

const createTaskForm = document.querySelector(".create-task-block");
createTaskForm.addEventListener("submit", (event) => {
  
  event.preventDefault();

  const existsErrorMessage = createTaskForm.querySelector(".error-message-block");
  if (existsErrorMessage) {
    existsErrorMessage.remove();
  }
  
  const { target } = event;
  const taskText = (target.taskName.value || "").trim();

  if (!taskText){
    const errorMessage = createErrorMessage("Название задачи не должно быть пустым!");
    createTaskForm.append(errorMessage);
    return;
  } 
  
  if (tasks.some((task) => { return task.text === taskText; })) {
    const errorMessage = createErrorMessage(
      "Задача с таким названием уже существует."
    );
    createTaskForm.append(errorMessage);
    return;
  }

  target.taskName.value = "";

  const task = {
    id: Date.now().toString(),
    completed: false,
    text: taskText,
  };

  tasks.push(task);
  console.log(tasks);
  const taskListItem = createTaskListItem(task.id, task.text);
  tasksList.append(taskListItem);
});

function createTaskListItem(taskId, taskText) {
  const checkId = `task-${taskId}`;

  // <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox-form__checkbox";
  checkbox.id = checkId;
  // <label for="task-1"></label>
  const labelForCheckbox = document.createElement("label");
  labelForCheckbox.htmlFor = checkId;

  // <form class="checkbox-form">
  const formForCheckbox = document.createElement("form");
  formForCheckbox.className = "checkbox-form";

  formForCheckbox.append(checkbox, labelForCheckbox);

  // <span class="task-item__text">Посмотреть новый урок по JavaScript</span>
  const spanTaskText = document.createElement("span");
  spanTaskText.className = "task-item__text";
  spanTaskText.innerText = taskText;
  // <div class="task-item__main-content">
  const itemMainContent = document.createElement("div");
  itemMainContent.className = "task-item__main-content";

  itemMainContent.append(formForCheckbox, spanTaskText);

  // <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Удалить</button>
  const buttonDelete = document.createElement("button");
  buttonDelete.className =
    "task-item__delete-button default-button delete-button";
  buttonDelete.dataset.deleteTaskId = taskId;
  buttonDelete.innerText = "Удалить";

  // <div class="task-item__main-container">
  const itemMainContainer = document.createElement("div");
  itemMainContainer.className = "task-item__main-container";

  itemMainContainer.append(itemMainContent, buttonDelete);

  // <div class="task-item" data-task-id="1"></div>
  const resultContainer = document.createElement("div");
  resultContainer.className = "task-item";
  resultContainer.dataset.taskId = taskId;

  resultContainer.append(itemMainContainer);

  return resultContainer;
}

const tasksList = document.querySelector(".tasks-list");
tasks.forEach((task) => {
  const taskListItem = createTaskListItem(task.id, task.text);
  tasksList.append(taskListItem);
});


/*
<div class="modal-overlay modal-overlay_hidden">
   <div class="delete-modal">
       <h3 class="delete-modal__question">
           Вы действительно хотите удалить эту задачу?
       </h3>
       <div class="delete-modal__buttons">
           <button class="delete-modal__button delete-modal__cancel-button">
               Отмена
           </button>
           <button class="delete-modal__button delete-modal__confirm-button">
               Удалить
           </button>
       </div>
   </div>
</div>
*/


let taskIdForDelete = null;

function createAskDeleteModalDiv(text) {
  // <h3 class="delete-modal__question">
  const modalQuestion = document.createElement("h3");
  modalQuestion.className = "delete-modal__question";
  modalQuestion.innerText = text;

  // <div class="delete-modal__buttons">
  const cancelButton = document.createElement("button");
  cancelButton.className = "delete-modal__button delete-modal__cancel-button";
  cancelButton.innerText = "Отмена";

  const confirmButton = document.createElement("button");
  confirmButton.className = "delete-modal__button delete-modal__confirm-button";
  confirmButton.innerText = "Удалить";

  const modalButtonsDiv = document.createElement("div");
  modalButtonsDiv.className = "delete-modal__buttons";
  modalButtonsDiv.append(cancelButton, confirmButton);

  //<div class="delete-modal">
  const modalQuestionDiv = document.createElement("div");
  modalQuestionDiv.className = "delete-modal";
  modalQuestionDiv.append(modalQuestion, modalButtonsDiv);

  // <div class="modal-overlay modal-overlay_hidden">
  const modalOverlayDiv = document.createElement("div");
  modalOverlayDiv.className = "modal-overlay modal-overlay_hidden";
  modalOverlayDiv.append(modalQuestionDiv);

  // add EventListeners  buttons
  cancelButton.addEventListener("click", () => {
    modalOverlayDiv.classList.add("modal-overlay_hidden");
  });

  confirmButton.addEventListener("click", () => {
    const deleteIndex = tasks.findIndex((task) => task.id === taskIdForDelete);
    if (deleteIndex >= 0) {
      tasks.splice(deleteIndex, 1);
      const taskItem = document.querySelector(
        `[data-task-id="${taskIdForDelete}"]`
      );
      taskItem.remove();
      modalOverlayDiv.classList.add("modal-overlay_hidden");
    }
  });
  // add EventListeners  buttons

  return modalOverlayDiv;
}


const askDeleteDiv = createAskDeleteModalDiv("Вы действительно хотите удалить эту задачу?");
document.body.prepend(askDeleteDiv);

tasksList.addEventListener("click", (event) => {
  const { target } = event;
  const deleteTaskButton = target.closest(".task-item__delete-button");
  if (deleteTaskButton) {
    const taskForDelete = deleteTaskButton.closest(".task-item");
    if (taskForDelete) {
      taskIdForDelete = taskForDelete.dataset.taskId;
      askDeleteDiv.classList.remove("modal-overlay_hidden");
    }
  }
});
