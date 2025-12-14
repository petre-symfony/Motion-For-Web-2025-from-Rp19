const square = document.querySelector('.square')

square.style.transform = 'rotate(45deg)'

setTimeout(() => {
  square.style.transform = 'rotate(45deg)'
}, 1000)