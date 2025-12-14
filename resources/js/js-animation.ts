const square = document.querySelector('.square')

square.style.transform = 'rotate(45deg)'

let rotation = 0

setInterval(() => {
  rotation += 1
  square.style.transform = `rotate(${rotation}deg)`
}, 1000/60)