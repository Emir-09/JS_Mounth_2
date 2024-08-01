// // // const myFunc = (callback) => {
// // //     callback()
// // // }

// // // const myFunc2 = () => {}

// // // myFunc(myFunc2) // Функция вышего порядка


// // let i = 0

// // const count = () => {
// //     i++
// //     console.log(i);
// //     count()
// // }

// // count()

// // const myFunc = () => {
// //     console.log("A");
// // }

// // myFunc()


// new Promise ((resolve, reject) => {
//     resolve()
// }).then().then().then()

// const myFunc = async() => {
//     try {
//         await
//         await
//     } catch {}
// }


// const [a, b] = [1, 2] // деструктуризация

// console.log(a, b);

// const [a, ...b] = [1, 2, 3, 4, 5, 6] // рестоператор(деструктуризация)

// console.log(a, b);


// const obj = {
//     name: '1'
// }

// const obj2 = JSON.parse(JSON.stringify(obj)) // глубокое копирование

// // const obj2 = {...obj} // копировать элемент но не оцилаца к нему

// obj.name = "2"

// console.log(obj, obj2);

if (true) {
    console.log("1");
} else {
    console.log("2")
}

true ? console.log('1') : console.log("2");
console.log()