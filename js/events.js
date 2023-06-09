import { 
  playButton,
  stopButton,
  pauseButton,
  increaseTimeButton,
  decreaseTimeButton,
  forestButton,
  rainButton,
  coffeButton,
  fireButton
} from "./elements.js"

export default function Events({
  controls,
  timer,
  sounds,
  minutesDisplay
}) {

  let minutes = Number(minutesDisplay.textContent) 

  playButton.addEventListener('click', function() {
    controls.play()
    timer.countDown()
  })

  stopButton.addEventListener('click', function() {
    controls.reset()
    timer.reset()
  })

  pauseButton.addEventListener('click', function() {
    controls.pause()
    timer.pause()
  })

  increaseTimeButton.addEventListener('click', function() {
    minutes = minutes + 1
    timer.updateDisplay(minutes, 0)
  })

  decreaseTimeButton.addEventListener('click', function() {
    minutes = minutes - 1

    if(minutes < 0) {
      minutes = 0
    } else {
        timer.updateDisplay(minutes, 0)
    }
  })

  forestButton.addEventListener('click', function() {
    forestButton.classList.toggle('selected')
    rainButton.classList.remove('selected')
    coffeButton.classList.remove('selected')
    fireButton.classList.remove('selected')
    sounds.playForestSound()

  })

  rainButton.addEventListener('click', function() {
    rainButton.classList.toggle('selected')
    coffeButton.classList.remove('selected')
    fireButton.classList.remove('selected')
    forestButton.classList.remove('selected')
    sounds.playRainSound()
  })

  coffeButton.addEventListener('click', function() {
    coffeButton.classList.toggle('selected')
    fireButton.classList.remove('selected')
    forestButton.classList.remove('selected')
    rainButton.classList.remove('selected')
    sounds.playCoffeSound()
  })

  fireButton.addEventListener('click', function() {
    fireButton.classList.toggle('selected')
    forestButton.classList.remove('selected')
    rainButton.classList.remove('selected')
    coffeButton.classList.remove('selected')
    sounds.playFireSound()
  })


  }