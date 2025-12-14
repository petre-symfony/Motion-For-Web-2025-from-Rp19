const square = document.querySelector('.square')

square.style.transform = 'rotate(45deg)'

let rotation = 0
const MAX_ROTATION = 45

const intervalId = setInterval(() => {
  rotation += 1
  square.style.transform = `rotate(${rotation}deg)`
  if (rotation >= MAX_ROTATION) {
    clearInterval(intervalId)
  }
}, 1000/60)