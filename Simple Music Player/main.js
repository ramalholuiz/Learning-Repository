const music = document.getElementById('music')

function playTrack() {
  music.play()
}

function pauseTrack() {
  music.pause()
}

function stopTrack() {
  music.pause()
  music.currentTime = 0
}
