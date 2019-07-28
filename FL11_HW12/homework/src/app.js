let todo = [];
const TaskAdd = document.getElementsByClassName('addTask')[0];
const saveChanges = document.getElementsByClassName('saveChanges')[0];
const modifyInput = document.getElementsByClassName('modifyInput')[0];
const cancel = document.getElementsByClassName('Cancel');
const taskInput = document.getElementsByClassName('addTaskInput')[0];
const taskList = document.getElementsByClassName('taskList')[0];
const statusCopy = document.getElementsByClassName('statusCopy')[0];
const addPage = document.getElementsByClassName('addScreen')[0];
const modifyPage = document.getElementsByClassName('modifyScreen')[0];
const saveOnEdit = document.getElementsByClassName('saveOnEdit')[0];
const main = document.getElementsByClassName('mainScreen')[0];
const ErrorMessage = document.getElementsByClassName('messageError')[0];
const Timeout = 3000;
let CompetedItems = [];
let itemIndex = null;

TaskAdd.onclick = function() {
  location.hash = 'add-page';
  showAdd();
};

for (let i = 0; i < cancel.length; i++) {
  cancel[i].onclick = function() {
    location.hash = 'main-page';
    showMain();
  };
}

function showError(msg) {
    ErrorMessage.style.display = 'block';
    ErrorMessage.innerHTML = msg;
    setTimeout(function(){
    ErrorMessage.style.display = 'none';
  }, Timeout);
}

saveOnEdit.onclick = function(){
  let filteredItems = todo.filter(item => item.name !== modifyInput.value);
  if (modifyInput.value !== '' &&
    (filteredItems.length === todo.length || todo[itemIndex].name === modifyInput.value)) {
    todo[itemIndex].name = modifyInput.value;
    todoList();
    itemIndex = null;
    showMain();
  } else if (modifyInput.value === '') {
    showError('You cant add an empty item');
  } else {
    showError('You cant add already existed item');
  }
};

function showModify () {
    addPage.style.display = 'none';
    main.style.display = 'none';

    let modifiedValue = modifyInput.value;  
    
    for(let i=0; i < todo.length; i++) {
    if (todo[i].name === modifiedValue) {
      window.location.hash = '#modify/:' + i;
    }
  }
  modifyPage.style.display = 'block';  
}

function showAdd () {
    modifyPage.style.display = 'none';
    main.style.display = 'none';
    window.location.hash = '#add';
    addPage.style.display = 'block';  
}

function saveItems() {
    localStorage.setItem('items', stringItems);
    localStorage.setItem('CompetedItems', strDoneItems);
    let stringItems = JSON.stringify(todo);
    let strDoneItems = JSON.stringify(CompetedItems);  
}

function getItems() {
  let stringItems = localStorage.getItem('items');
  let strDoneItems = localStorage.getItem('CompetedItems');
  todo = JSON.parse(stringItems);
  CompetedItems = JSON.parse(strDoneItems);
  if (!todo) {
    todo = [];
  }
  if (!CompetedItems) {
    CompetedItems = [];
  }
}

function showMain () {
    modifyPage.style.display = 'none';
    addPage.style.display = 'none';

    main.style.display = 'block';  
}

function removeItem(index) {
    todo.splice(index, 1);
}
  
const todoList = () => {
      taskList.innerHTML = '';  
      todo = todo.filter(item => !item.completed);
      CompetedItems = CompetedItems.filter(item => item.completed);
      todo = todo.concat(CompetedItems);
      if (todo.length) {
        statusCopy.innerHTML = '';
      } else {
        statusCopy.innerHTML = 'TODO List is empty';
    }
  
  for (let item = 0; item < todo.length; item++) {
    const toDoIt = document.createElement('li');
    const checkIt = document.createElement('img');
    
    checkIt.onclick = function() {
      if (!todo[item].completed) {
        todo[item].completed = true;
        CompetedItems.push(todo[item]);
        todoList();
      } else {
        todo[item].completed = false;
        todoList();
      }
    };    
   
    if (todo[item].completed) {
      checkIt.src = './assets/img/done-s.png';
    } else {
      checkIt.src = './assets/img/todo-s.png';
    }
    
    let cp = document.createElement('span');
    cp.innerHTML = todo[item].name;
    
    cp.onclick = function() {
      if (!todo[item].completed) {
        modifyInput.value = todo[item].name;
        showModify();
        itemIndex = item;
      } else {
        showError('You cant edit already completed item!');
      }
    };
    
    const deleteIt = document.createElement('img');
    deleteIt.src = './assets/img/remove-s.jpg';

    deleteIt.onclick = function() {
      removeItem(item);
      CompetedItems = todo.filter(item => item.completed);
      todoList();
    };    
    toDoIt.appendChild(cp);
    toDoIt.appendChild(checkIt);
    taskList.appendChild(toDoIt);
    toDoIt.appendChild(deleteIt);    
    if (todo[item].completed) {
      toDoIt.style.backgroundColor = '#ccc';
    }
  }
  saveItems();
};

function addItem(name) {  
  if (!todo.every(item => item.name !== name)) {
    showError('You cant add already existed item!');
  } else if (name === '') {    
    showError('You cant add an empty item!');
  } else {    
    const newItem = {
      name: name,
      completed: false
    };
    todo.push(newItem);
    taskInput.value = '';    
    showMain();    
    todoList();
  }
}

saveChanges.addEventListener('click', function() {
  addItem(taskInput.value);
});

window.onload = function() {
  getItems();
  todoList();
  window.location.hash = '';
};