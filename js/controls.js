

export default function Controls({
  playButton,
  pauseButton,
}) {


function play() {
  playButton.classList.add('hide')
  pauseButton.classList.remove('hide')
}


function pause() {
  pauseButton.classList.add('hide')
  playButton.classList.remove('hide')
  
}

function reset() {
  playButton.classList.remove('hide')
  pauseButton.classList.add('hide')
}


return {
  play,
  pause,
  reset
}


}