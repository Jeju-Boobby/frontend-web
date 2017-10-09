// dom 불러오기
var scoreDom = document.getElementById('score');
var levelDom = document.getElementById('level');
var missedDom = document.getElementById('missed');
var max_missDom = document.getElementById('max-miss');

var mainDom = document.getElementById('main');

var score;
var level;
var missed;
var max_miss;

function newGame() {
  score = 0;
  level = 1;
  missed = 0;
  max_miss = 11;

  updateScoreBoard();
  showRectangle();
}

function updateScoreBoard() {
  scoreDom.innerHTML = score;
  levelDom.innerHTML = level;
  missedDom.innerHTML = missed;
  max_missDom.innerHTML = max_miss;
}

var rectangleDom;

function showRectangle() {
  var left = document.body.scrollWidth - 30; // 30은 rectangle 높이
  var top = document.body.scrollHeight - 145; // 129는 header, hr, rectangle 높이를 합한 값
  var str = '<span id="rectangle"></span>';
  mainDom.innerHTML = str;

  var leftRandom = Math.floor(Math.random() * left);
  var topRandom = Math.floor(Math.random() * top) + 115;

  rectangleDom = document.getElementById('rectangle');

  rectangleDom.style.left = leftRandom + "px";
  rectangleDom.style.top = topRandom + "px";

  rectangleDom.addEventListener('click', rectangleClick);
}

function rectangleClick(event) {
  score++;
  level = Math.ceil(score / 10);
  missed = -1;  // bodyClick 도 같이 돌아버려서 -1로 해줌.. 해결방안 물어보자
  max_miss = 11 - level;

  updateScoreBoard();

  if (score >= 101) {
    var isNewGame = confirm('게임을 클리어 하셨습니다! 게임을 새로 시작할까요?');

    if (isNewGame) {
      newGame();

      return;
    } else {
      endGame();

      return;
    }
  }

  showRectangle();
}

function endGame() {
  mainDom.innerHTML = '<h1 style="text-align: center;">Game End</h1>';
}

function bodyClick(event) {
  missed++;

  updateScoreBoard();

  if (missed >= max_miss) {
    var isNewGame = confirm('GAME OVER!!! 게임을 새로 시작할까요?');

    if (isNewGame) {
      newGame();

      return;
    } else {
      endGame();

      return;
    }
  }

  showRectangle();
}

document.body.addEventListener('click', bodyClick);

newGame();
