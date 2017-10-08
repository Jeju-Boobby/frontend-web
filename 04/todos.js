//start...
console.log('todos');

var formDom = document.getElementById('new-task');
var ulDom = document.getElementById('todos');
var taskArray = [];
var deleteDoms = [];

function addNewTask(event) {
  event.preventDefault();
  console.log('add new task');
  var newTaskDom = formDom.elements[0];
  if (newTaskDom.value == '') {
    alert('내용을 입력하세요!');
  } else {
    taskArray.push(newTaskDom.value);

    showTaskArray();
    newTaskDom.value = '';
  }
}

function showTaskArray() {
  var str = '';
  for (var i = 0; i < taskArray.length; i++) {
    str += '<li id="'+ i +'">';
    str += '<button class="delete">×</button>';
    str += '<input type="checkbox" class="toggle-checked">';
    str += '<span class="text">'+ taskArray[i] +'</span>';
    str += '</li>';
  }

  ulDom.innerHTML = str;
  addDeleteListener();
}

function deleteTask(event) {
  console.log(event.currentTarget);
  console.log(event.currentTarget.parentNode.id);
  taskArray.splice(event.currentTarget.parentNode.id, 1);

  showTaskArray();
}

function addDeleteListener() {
  deleteDoms = document.getElementsByClassName('delete');
  for (var i = 0; i < deleteDoms.length; i++) {
    deleteDoms[i].addEventListener('click', deleteTask);
  }
}

formDom.addEventListener('submit', addNewTask, false);
