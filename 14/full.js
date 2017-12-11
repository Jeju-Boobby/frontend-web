var fullScreen = function fullScreen() {
  console.log('full screen');
  if (screenfull.enabled) {
    screenfull.request();
  }
}

document.getElementById('button').addEventListener('click', fullScreen);
