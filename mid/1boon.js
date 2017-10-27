console.log('1boon');

// 기본 변수들
var pageNo = 1;
var trending_url = 'http://1boon.kakao.com/ch/trending.json?pagesize=10&page=';
var issue_url = 'http://1boon.kakao.com/ch/issue.json?pagesize=10&page=';
var enter_url = 'http://1boon.kakao.com/ch/enter.json?pagesize=10&page=';

var str = '';
var current_url = trending_url;

// DOM
var list = document.getElementById('list');
var more_btn = document.getElementById('more');

var trending = document.getElementById('trending');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter');

// loading Element 생성
var loading = document.createElement('div');
loading.classList.add('text-center');
var loading_icon = document.createElement('span');
loading_icon.classList.add('glyphicon');
loading_icon.classList.add('glyphicon-refresh');
loading_icon.classList.add('spin');
var loading_text = document.createTextNode(' 로딩중');
loading.appendChild(loading_icon);
loading.appendChild(loading_text);
loading.setAttribute('id', 'loading');


// 공통으로 실행할 함수 작성(클래스에 active 추가)
function showLoading() {
  list.appendChild(loading);
}

function active(event) {
  var actived = document.getElementsByClassName('active');

  for (var i = 0; i < actived.length; i++) {
    actived[i].classList.remove('active');
  }

  event.currentTarget.classList.add('active');
  showLoading();
}

function done(result) {
  list.removeChild(loading);

  for (var i = 0; i < result.data.length; i++) {
    str += '<a href="http://1boon.kakao.com/'+ result.data[i].path +'" class="item">';
    str += '<h3 class="title">'+ result.data[i].title + '</h3>';
    str += '<h5 class="totalView">조회수: ' + result.data[i].totalView + '</h5>';
    str += '<div class="imageWrapper"><img src="' + result.data[i].coverImage + '" alt=""/></div></a>';
  }

  list.innerHTML = str;
}

function getMore(event) {
  pageNo++;

  showLoading();
  getJSON(current_url + pageNo, done);
}

// 메뉴별 함수 작성
function showTrending(event) {
  str = '';
  list.innerHTML = str;
  active(event);

  pageNo = 1;
  current_url = trending_url;
  getJSON(current_url + pageNo, done);
}

function showIssue(event) {
  str = '';
  list.innerHTML = str;
  active(event);

  pageNo = 1;
  current_url = issue_url;
  getJSON(current_url + pageNo, done);
}

function showEnter(event) {
  str = '';
  list.innerHTML = str;
  active(event);

  pageNo = 1;
  current_url = enter_url;
  getJSON(current_url + pageNo, done);
}

// 메뉴에 함수 적용
trending.addEventListener('click', showTrending);
issue.addEventListener('click', showIssue);
enter.addEventListener('click', showEnter);

more_btn.addEventListener('click', getMore);

showLoading();
getJSON(trending_url + pageNo, done);
