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

function showRectangle() {
  var str = '<span id="rectangle"></span>';
  mainDom.innerHTML = str;
}

updateScoreBoard();
showRectangle();

// main의 width, height 불러오기

// rectangle 위치 랜덤으로 정하기

// rectangle이 클릭됬을 때 실행할 함수

// rectangle이 아닌 main이 클릭 됬을 때 실행할 함수

// rectangle, main에 clickListener 붙이기
