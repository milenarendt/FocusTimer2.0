import { 
  forestVolumeSlider,
  rainVolumeSlider,
  coffeVolumeSlider,
  fireVolumeSlider } from "./elements.js"

export default function Sounds() {

const forestSound = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Floresta.mp3?raw=true')
const rainSound = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Chuva.mp3?raw=true')
const coffeSound = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Cafeteria.mp3?raw=true')
const fireSound = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Lareira.mp3?raw=true')


forestSound.loop = true
rainSound.loop = true
coffeSound.loop = true
fireSound.loop = true

function playForestSound() {
  if(forestSound.paused) {
    forestSound.play()
    rainSound.pause()
    coffeSound.pause()
    fireSound.pause()
  } else {
    forestSound.pause()
  }
}

function playRainSound() {
  if(rainSound.paused) {
    rainSound.play()
    forestSound.pause()
    coffeSound.pause()
    fireSound.pause()
  } else {
    rainSound.pause()
  }
}

function playCoffeSound() {
  if(coffeSound.paused) {
    coffeSound.play()
    rainSound.pause()
    fireSound.pause()
    forestSound.pause()
  } else {
    coffeSound.pause()
  }
}

function playFireSound() {
  if(fireSound.paused) {
    fireSound.play()
    coffeSound.pause()
    rainSound.pause()
    forestSound.pause()
  } else {
    fireSound.pause()
  }
}

function forestVolume() {
  const volume = forestVolumeSlider.value
  forestSound.volume = volume
}

function rainVolume() {
  const volume = rainVolumeSlider.value
  rainSound.volume = volume
}

function coffeVolume() {
  const volume = coffeVolumeSlider.value
  coffeSound.volume = volume
}

function fireVolume() {
  const volume = fireVolumeSlider.value
  fireSound.volume = volume
}


return {
  forestSound,
  rainSound,
  coffeSound,
  fireSound,
  playForestSound,
  playRainSound,
  playCoffeSound,
  playFireSound,
  forestVolume,
  rainVolume,
  coffeVolume,
  fireVolume
}
}