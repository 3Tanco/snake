import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from './grid.js'

let grow = getRandomGrowPosition()
const EXPANSION_RATE = 5

export function update() {
  if (onSnake(grow)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomGrowPosition()
  }
}

export function draw(playArea) {
  const growElement = document.createElement('div')
  growElement.style.gridRowStart = grow.y
  growElement.style.gridColumnStart = grow.x
  growElement.classList.add('grow')
  playArea.appendChild(growElement)
}

function getRandomGrowPosition() {
  let newGrowPosition
  while (newGrowPosition == null || onSnake(newGrowPosition)) {
    newGrowPosition = randomGridPosition()
  }
  return newGrowPosition
}