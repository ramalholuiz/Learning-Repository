const btn = document.querySelector('#btn1')
const back = document.querySelector('.back')

btn.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor() {
  let color = generateRandomArrayOfColor()
  console.log(color)
  back.style.setProperty('background-color', color)
}

function generateRandomArrayOfColor() {
  return (
    'rgb(' +
    Math.floor(Math.random() * 255) +
    ', ' +
    Math.floor(Math.random() * 255) +
    ', ' +
    Math.floor(Math.random() * 255) +
    ')'
  )
}
