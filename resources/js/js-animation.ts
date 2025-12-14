const square = document.querySelector('.square') as HTMLDivElement

const keyframes = [
  {
    transform: 'translateX(0px) translateY(0px)',
    easing: 'ease-in-out' },
  {
    transform: 'translateX(100px) rotate(45deg)',
    offset: 0.2,
    easing: 'ease-in-out'
  },
  {
    transform: 'translateX(100px) translateY(100px)',
    scale: 0.8,
    easing: 'ease-in-out'
  },
  {
    transform: 'translateX(0px) translateY(100px) rotate(-90deg)',
    offset: 0.8,
    easing: 'ease-in-out'
  },
  { transform: 'translateX(0px) translateY(0px)' }
]
const options: KeyframeAnimationOptions = {
  duration: 5000,
  iterations: Infinity,
  easing: 'ease-in-out'
}
const playButton = document.querySelector('#play') as HTMLButtonElement
const pauseButton = document.querySelector('#pause') as HTMLButtonElement
const reverseButton = document.querySelector('#reverse') as HTMLButtonElement
const slider = document.querySelector('#slider') as HTMLInputElement

const animation = square.animate(keyframes, options)

playButton.addEventListener('click', () => {
  animation.play()
})

pauseButton.addEventListener('click', () => {
  animation.pause()
})

reverseButton.addEventListener('click', () => {
  animation.reverse()
})

slider.addEventListener('change', () => {
  // Sync the slider value to the animation speed

  animation.playbackRate = parseFloat(slider.value)
})

/*square.style.transform = 'rotate(45deg)'

let rotation = 0
const MAX_ROTATION = 360r

function rotateSquare() {
  rotation += 1
  square.style.transform = `rotate(${rotation}deg)`

  if (rotation <= MAX_ROTATION) {
    requestAnimationFrame(rotateSquare)
  }
}

rotateSquare()*/

/*const intervalId = setInterval(() => {
  rotation += 1
  square.style.transform = `rotate(${rotation}deg)`
  if (rotation >= MAX_ROTATION) {
    clearInterval(intervalId)
  }
}, 1000/10)*/