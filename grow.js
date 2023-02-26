import { onSnake, expandSnake } from "./snake.js"


let grow = { x: 10, y:1}
const Expansion_Rate = 1
export function update() {
    if (onSnake(grow)) {
        expandSnake(Expansion_Rate)
        grow = { x: 20, y: 10}
    }
}

export function draw(playArea) {
    const growElement = document.createElement('div')
    growElement.style.gridRowStart = grow.y
    growElement.style.gridColumnStart = grow.x
    growElement.classList.add('grow')
    gameBoard.appendChild(growElement)
  }