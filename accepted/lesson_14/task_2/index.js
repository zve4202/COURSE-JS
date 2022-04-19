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

/*
<div class="task-item" data-task-id="1">
   <div class="task-item__main-container">
       <div class="task-item__main-content">
           <form class="checkbox-form">
               <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
               <label for="task-1"></label>
           </form>
           <span class="task-item__text">Посмотреть новый урок по JavaScript</span>
       </div>
       <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Удалить</button>
   </div>
</div>
 */

function createTaskListItem(taskId, taskText) {
  const resultContainer = document.createElement("div");
  resultContainer.className = "task-item";
  resultContainer.dataset.taskId = taskId;
  
  resultContainer.innerHTML = `
  <div class="task-item__main-container">
    <div class="task-item__main-content">
      <form class="checkbox-form">
        <input class="checkbox-form__checkbox" type="checkbox" id="task-${taskId}">
        <label for="task-${taskId}"></label>
      </form>
      <span class="task-item__text">${taskText}</span>
    </div>
    <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${taskId}">Удалить</button>
  </div>
  `;

  return resultContainer;
}

function createTaskListItem2(taskId, taskText) {
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
  buttonDelete.className = "task-item__delete-button default-button delete-button";
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
  //const taskListItem = createTaskListItem(task.id, task.text);
  const taskListItem = createTaskListItem2(task.id, task.text);
  tasksList.append(taskListItem);
});