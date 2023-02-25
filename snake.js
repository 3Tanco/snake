export const SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }]

export function update()   {
console.log('update snake')

}

export function draw(playArea)  {
    snakeBody.forEach(segment => {
        const snakeElement =  document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridCol = segment.y
        snakeElement.classList.add('snake')
        playArea.appendChild(snakeElement)
        
    })


}