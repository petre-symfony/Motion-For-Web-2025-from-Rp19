const square = document.querySelector('.square') as HTMLDivElement

const keyframes = [
  { transform: 'translateX(0px) translateY(0px)' }, //0%
  { transform: 'translateX(100px)', border: 'solid 8px black' }, //40%
  { transform: 'translateX(100px) translateY(100px)' }, //50%
  { transform: 'translateX(0px) translateY(100px)' }, //90%
  { transform: 'translateX(0px) translateY(0px)' } //100%
]

const options: KeyframeAnimationOptions = {
  duration: 2000,
  iterations: Infinity
}

square.animate(keyframes, options)

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