// console.log("start")
//
// setTimeout(() => {
//     const product = {
//         name: "Iphone",
//         price: "27000"
//     }
//     console.log(product, "1")
//     setTimeout(() => {
//         product.isModified = true
//         console.log(product, "2")
//         setTimeout(() => {
//             product.status = "ordered"
//             console.log(product, "3")
//         }, 2000)
//     }, 2000)
// }, 2000)


// console.log("start")
//
//
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: "Iphone",
//             price: "27000"
//         }
//         console.log(product, "1")
//         resolve(product)
//     }, 2000)
// })
//
//
// request.then((product) => {
//     const request2 = new Promise((resolve) => {
//         setTimeout(() => {
//             product.isModified = true
//             console.log(product, "2")
//             resolve()
//         }, 2000)
//     })
//     request2.then(() => {
//         setTimeout(() => {
//             product.status = "ordered"
//             console.log(product, "3")
//         }, 2000)
//     })
// })


// console.log("start")
//
//
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: "Iphone",
//             price: "27000"
//         }
//         console.log(product, "1")
//         resolve(product)
//     }, 2000)
// })
//
//
// request.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.isModified = true
//             console.log(product, "2")
//             // resolve()
//             reject()
//         }, 2000)
//     }).finally(() => {
//         console.warn("finally")
//     })
//     // .catch(() => {
//     //     console.error("error")
//     // .then(() => {
//      //    setTimeout(() => {
//      //        product.status = "ordered"
//      //        console.log(product, "3")
//      //    }, 2000)
//      // })
// })

// fetch('data.json')
//     .then((response) => {
//       return response.json()
//     })
//     .then(json => console.log(json))
//     .catch(() => {
//     console.error(e)
// })
// .finally(() => {
//     console.warn("finally")
// })


const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'


const fetchData = async () => {
    try {
        console.log("start")
        await delay(2000)
        console.log("after delay")
        const resp = await fetch(url)
        console.log(resp)
        const data = await resp.json()
        console.log(data)
    } catch (e) {
        console.error("error")
    } finally {
        console.warn("finally")
    }
}


fetchData()

// const fetchData = () => {
//     console.log("start")
//     return delay(2000)
//         .then(() => fetch(url))
//         .then((data) => data.json())
// }
//
// fetchData().then((response) => {console.log(response)})
//     .catch((e) => console.error(e))
//     .finally(() => console.warn("finally"))