import { getInputDirection } from "./move.js"

export const SNAKE_SPEED = 1
const snakeBody = [
    { x: 11, y: 11 },
]
    


export function update()   {
const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
     snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(playArea)  {
    snakeBody.forEach(segment => {
        const snakeElement =  document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        playArea.appendChild(snakeElement)
        
    })


}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPositions(segment,position)
    })

}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
  
    newSegments = 0
  }