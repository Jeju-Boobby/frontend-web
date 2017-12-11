//start...
var ulDom = $('#todos');
var newTaskDom = $('#new-task');

newTaskDom.on('submit', function(event) {
  event.preventDefault();
  console.log("new task", event.currentTarget.elements[0].value);


});

function showTaskArray() {
  var str = '';
  str += '<li id="'+ i +'">';
  str += '<button class="delete">×</button>';
  str += '<input type="checkbox" class="toggle-checked">';
  str += '<span class="text">'+ taskArray[i] +'</span>';
  str += '</li>';


  ulDom.innerHTML += str;
  addDeleteListener();
}
