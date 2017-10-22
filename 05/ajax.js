console.log('ajax.js');

var btn = document.getElementById('btn');

btn.addEventListener('click', load);

function load(event) {
  var request = new XMLHttpRequest();

  request.open('GET', 'dummy.json', true);

  console.log(request);

  request.onreadystatechange = function() {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
      }
    }
  }

  request.send();
  console.log('send');
}
