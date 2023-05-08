import Sounds from './sounds.js'
import Controls from './controls.js'
import Events from './events.js'
import Timer from './timer.js'
import { 
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton
} from './elements.js'



const controls = Controls({
  playButton,
  pauseButton,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controlsReset: controls.reset
})

const sounds = Sounds()


Events({ 
  controls,
  timer,
  sounds,
  minutesDisplay,
})























