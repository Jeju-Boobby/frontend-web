// var log = document.getElementById('log');
// console.log(log);
//
// var a = document.querySelectorAll('#log a');
//
// console.log(a.length, a[0], a[1]);
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);
//
// log.innerHTML += '<div style="color:red">hello</div>';

var divs = document.querySelectorAll('#wrap div');

console.log(divs);
var beforeTarget = divs[0];
var beforeTargetColor = 'black';

function changeBg(event) {
  // console.log('changeBg');
  beforeTarget.style.backgroundColor = beforeTargetColor;
  beforeTargetColor = event.currentTarget.style.backgroundColor;
  event.currentTarget.style.backgroundColor = 'red';
  beforeTarget = event.currentTarget;
}

var j = 0;
for (var i = 0; i < divs.length; i++) {

  if (j % 2 == 0) {
    divs[i].style.backgroundColor = 'black';
  } else {
    divs[i].style.backgroundColor = 'white';
  }

  if (i % 4 == 3) {
    j++;
  }
  j++;
  divs[i].addEventListener('click', changeBg);
}
