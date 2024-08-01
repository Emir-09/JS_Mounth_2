const placeBlock = document.querySelector('.inner_wrapper')
const block = document.querySelector('#block')
const timer = document.querySelector('#timer')

let rotateY = 0
let rotateX = 0

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {rotateY -= 4}
    else if (event.keyCode === 38) {rotateX += 4}
    else if (event.keyCode === 39) {rotateY += 4}
    else if (event.keyCode === 40) {rotateX -= 4}
    block.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
})


let positionX = 0
let positionY = 0
const limit = 1000
const speed = 5


const moveBlockXY = () => {
    if(positionX < limit && positionY === 0) positionX += speed
    else if(positionX === limit && positionY < limit) positionY += speed
    else if(positionX > 0 && positionY === limit) positionX -= speed
    else if(positionX === 0 && positionY > 0) positionY -= speed

    placeBlock.style.left = `${positionX}px`
    placeBlock.style.top = `${positionY}px`

    setTimeout(moveBlockXY, 10);
}

moveBlockXY()

// let positionZ = 0

// const moveLT = () => {
//     if (positionZ < 920) {
//         positionZ += 5
//         placeBlock.style.left = `${positionZ}px`
//         setTimeout(moveLT, 5)
//     } else if (positionZ < 1470) {
//         positionZ += 5
//         placeBlock.style.top = `${positionZ - 920}px`
//         setTimeout(moveLT, 5)
//     } else {
//         moveRB()
//     }
// }

// moveLT()

// const moveRB = () => {
//     if (positionZ > 550) {
//         positionZ -= 5
//         placeBlock.style.left = `${positionZ - 550}px`
//         setTimeout(moveRB, 5)
//     } else if (positionZ > 0) {
//         positionZ -= 5
//         placeBlock.style.top = `${positionZ}px`
//         setTimeout(moveRB, 5)
//     } else {
//         moveLT()
//     }
// }

let sec = 0

const time = () => {
    sec++
    timer.innerHTML = sec
    if(sec === 60) clearInterval(interval)
}

const interval = setInterval(time, 1000)
