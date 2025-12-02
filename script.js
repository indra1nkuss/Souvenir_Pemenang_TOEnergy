
function goToWinners() {
  window.location.href = "winners.html";
}
function goBack() {
  window.location.href = "index.html";
}
document.addEventListener('click', function() {
  const music = document.getElementById('bgMusic');
  if(music && music.paused) music.play();
});
