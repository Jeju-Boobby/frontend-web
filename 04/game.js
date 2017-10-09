// dom 불러오기
var scoreDom = document.getElementById('score');
var levelDom = document.getElementById('level');
var missedDom = document.getElementById('missed');
var max_missDom = document.getElementById('max-miss');

var mainDom = document.getElementById('main');

// 초기화
var score = 0;
var level = 1;
var missed = 0;
var max_miss = 11;

function updateScoreBoard() {
  scoreDom.innerHTML = score;
  levelDom.innerHTML = level;
  missedDom.innerHTML = missed;
  max_missDom.innerHTML = max_miss;
}

console.log(document.body.scrollWidth);
console.log(document.body.scrollHeight);
var rectangleDom;

function showRectangle() {
  var left = document.body.scrollWidth - 30; // 30은 rectangle 높이
  var top = document.body.scrollHeight - 145; // 129는 header, hr, rectangle 높이를 합한 값
  var str = '<span id="rectangle"></span>';
  mainDom.innerHTML = str;

  var leftRandom = Math.floor(Math.random() * left);
  var topRandom = Math.floor(Math.random() * top) + 115;
  console.log(leftRandom);
  console.log(topRandom);
  rectangleDom = document.getElementById('rectangle');
  console.log(rectangleDom);
  rectangleDom.style.left = leftRandom + "px";
  rectangleDom.style.top = topRandom + "px";
}

updateScoreBoard();
showRectangle();

// rectangle이 클릭됬을 때 실행할 함수

// rectangle이 아닌 main이 클릭 됬을 때 실행할 함수

// rectangle, main에 clickListener 붙이기
