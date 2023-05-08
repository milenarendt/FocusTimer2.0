

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

const forestButton = document.querySelector('.forest-sound')
const rainButton = document.querySelector('.rain-sound')
const coffeButton = document.querySelector('.coffe-sound')
const fireButton = document.querySelector('.fire-sound')

const increaseTimeButton = document.querySelector('.increaseTime')
const decreaseTimeButton = document.querySelector('.decreaseTime')

const lightThemeButton = document.querySelector('.lightThemeBtn')
const darkThemeButton = document.querySelector('.darkThemeBtn')
const body = document.querySelector('body')

const forestVolumeSlider = document.querySelector('#forestSound')
const rainVolumeSlider = document.querySelector('#rainSound')
const coffeVolumeSlider = document.querySelector('#coffeSound')
const fireVolumeSlider = document.querySelector('#fireSound')



export {
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  stopButton,
  forestButton,
  rainButton,
  coffeButton,
  fireButton,
  increaseTimeButton,
  decreaseTimeButton,
  lightThemeButton,
  darkThemeButton,
  body,
  forestVolumeSlider,
  rainVolumeSlider,
  coffeVolumeSlider,
  fireVolumeSlider
}