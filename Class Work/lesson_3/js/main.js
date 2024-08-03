// function varTest() {
//     var x = 1
//     console.log(x, 'a');
//     function abc() {
//         var x = 2
//         console.log(x, 'b');
//     }
//     abc()
//     console.log(x, 'c');
// }

// varTest()


// const letTest = () => {
//     let x = 1
//     console.log(x, 'a');
//     if (true) {
//         let x = 2
//         console.log(x, 'b');
//     }
//     console.log(x, 'c');
// }

// letTest()

const btns = document.querySelectorAll('button')


// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         // if (item.classList.contains('red')) {
//         //     item.classList.remove('red')
//         // } else {
//         //     item.classList.add('red')
//         // }
//         item.classList.toggle('red')
//     })
// })

const wrapper = document.querySelector('.wrapper')
const newButton = document.createElement('button')
newButton.innerHTML = '7'

wrapper.append(newButton)

wrapper.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.toggle('red')
    }
})