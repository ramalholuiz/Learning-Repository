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
  music.playbackRate = 0
}

function backTime() {
  music.currentTime -= 5
}

function fwdTime() {
  music.currentTime += 5
}

function decreaseSpd() {
  music.playbackRate -= 0.2
}

function increaseSpd() {
  music.playbackRate += 0.2
}

function volDown() {
  music.volume -= 0.1
}

function volUp() {
  music.volume += 0.1
}
