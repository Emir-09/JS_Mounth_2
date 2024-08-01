// const handClick = () => {
//     console.log('hello');
// }

// // handClick()

const btn = document.querySelector('button')

// btn.addEventListener('click', () => {
//     handClick()
// })

// setTimeout(() => {
//     console.log('async hello');
// }, 2000)


// const interval = setInterval(() => {
//     console.log('hello');
// }, 2000);

// setTimeout(() => clearInterval(interval), 1999)

// let i = 0

// btn.addEventListener('click', function () {
//     i++
//     if(i === 1) {
//         const interval = setInterval(() => {
//             console.log('hello');
//         }, 2000); 
//     } else {
//         clearInterval(interval)
//     }
// })

// const doHomework = (subject, callBackFunc) => {
//     alert(`starting my ${subject} homework`)
//     callBackFunc()
// }

// const alertFinished = () => {
//     alert('DONE!!!')
// }

// doHomework('math', alertFinished)


const block = document.querySelector('.block')
const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if(positionX <= 440){
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if(positionX >= 440 && positionY <= 440){
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}

move()