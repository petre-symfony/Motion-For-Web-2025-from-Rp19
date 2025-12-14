const square = document.querySelector('.square') as HTMLDivElement

const keyframes = [
  { transform: 'translateX(0px) translateY(0px)' },
  { transform: 'translateX(100px)' },
  { transform: 'translateX(100px) translateY(100px)' },
  { transform: 'translateX(0px) translateY(100px)' },
  { transform: 'translateX(0px) translateY(0px)' }
]

const options = {
  duration: 2000
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