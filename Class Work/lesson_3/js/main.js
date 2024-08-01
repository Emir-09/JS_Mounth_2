// function varTest() {
//     var x = 1
//     console.log(x, 'a')
//     function abc() {
//         var x = 2
//         console.log(x, 'b')
//     }
//     abc()
//     console.log(x, 'c')
// }
//
// varTest()

// if(NaN){
//     console.log(true)
// }else{
//     console.log(false)
// }
//
// console.log(Boolean([].length))

// const letTest = () => {
//     let x = 1
//     console.log(x, 'a')
//     if(true){
//         let x = 2
//         console.log(x, 'b')
//     }
//     console.log(x, 'c')
// }
//
// letTest()



// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         // if(item.classList.contains('red')) {
//         //     item.classList.remove('red')
//         // }else{
//         //     item.classList.add('red')
//         // }
//         item.classList.toggle('red')
//     })
// })



const newBtn = document.createElement('button')
const wrapper = document.querySelector('.wrapper')
newBtn.innerHTML = "7"

wrapper.append(newBtn)

wrapper.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        event.target.classList.toggle('red')
    }
})