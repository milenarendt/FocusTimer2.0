
export default function Timer({
  controlsReset,
  minutesDisplay,
  secondsDisplay
}) {



  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent) // pega o valor inicial

  function updateDisplay (newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    
    clearInterval(timerTimeOut)
    updateDisplay(minutes, 0)
    
  }

  function countDown () {
    timerTimeOut = setTimeout(function() {

      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes + seconds == 0

      updateDisplay(minutes, 0)

      if(isFinished) {
        controlsReset()
        updateDisplay()
        return
      }

      if(seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, seconds - 1)

      countDown()

    }, 1000)
  }


  

  function pause() {
    clearTimeout(timerTimeOut) // para parar o display
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }


  
  return{
    updateDisplay,
    countDown,
    reset,
    pause,
    updateMinutes
  }


}