var pageNo = 1;
var url = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20170101&endDate=20171013&pageSize=3&callback=done&pageNo=' + pageNo;

var container = document.getElementById("container");
var str = '';

getJSON(url, done);

function done(result) {
  console.log(result);

}

function getMore(event) {

}
