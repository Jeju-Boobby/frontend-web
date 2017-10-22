console.log('1boon');

var menu_list = document.getElementsByClassName('menu');

function active(event) {
  // console.log('active');
  var beforeActived = document.getElementsByClassName('active');
  beforeActived[0].classList.remove('active');
  event.currentTarget.classList.add('active');
}

for (var i = 0; i < menu_list.length; i++) {
  menu_list[i].addEventListener('click', active);
}
