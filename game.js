import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, } from './snake.js'

const playArea = document.getElementById('play-area')

let lastRenderTime = 0
function main (currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
  
    lastRenderTime = currentTime
  
    update()
    draw()
}

window.requestAnimationFrame(main)


function update ()  {
    updateSnake()
    playArea.innerHTML = ''

}


function draw()  {
    drawSnake(playArea)
    

}