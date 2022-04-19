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

const createTaskBlock = document.querySelector(".create-task-block");
createTaskBlock.addEventListener("submit", (event) => {
  const { target } = event;
  event.preventDefault();

  const taskText = target.taskName.value || "";
  if (!taskText) {
    alert("Название задачи не должно быть пустым!");
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