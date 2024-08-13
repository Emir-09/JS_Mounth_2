// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//                 setTimeout(() => {
//                     console.log(5)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// setTimeout(() => {
//     const product = {
//         name: 'Phone',
//         price: 9000
//     }
//     console.log(product);
//     setTimeout(() => {
//         product.isModified = true
//         console.log(product, 2);
//         setTimeout(() => {
//             product.status = 'ordered'
//             console.log(product, 3)
//         })
//     }, 1000);
// })

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Phone',
//             price: 9000
//         }
//         console.log(product, 1);
//         resolve(product)
//     }, 1000)
// })

// const resolveData = (product) => {
//     setTimeout(() => {
//         product.isModified = true
//         console.log(product, 2);
//     }, 1000);
// }

// request.then((product) => {
//     const request2 = new Promise((resolve) => {
        // setTimeout(() => {
        //     product.isModified = true
        //     console.log(product, 2);
        //     resolve()
        // }, 1000); 
//     }) 
//     request2.then(() => {
        // setTimeout(() => {
        //     product.status = 'ordered'
        //     console.log(product, 3)
        // }, 1000)
//     })
// }) 

// console.log('start');

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Phone',
//             price: 9000
//         }
//         console.log(product, 1);
//         resolve(product)
//     }, 1000)
// })


// request.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.isModified = true
//             console.log(product, 2);
//             resolve()
//             // reject()
//         }, 1000); 
//     })
//     .then(() => { 
//         setTimeout(() => {
//             product.status = 'ordered'
//             console.log(product, 3)
//         }, 1000)
//     })
//     .finally(() => {
//         console.warn('finally')
//     })

//     // .catch(() => {
//         // console.log('error');  
//     // })
// })

// fetch('data/data.json')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch((e) => {
//         console.error(e);
//       })
//       .finally(() => {
//         console.warn('finally');
//       })


const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const url = "https://jsonplafasfeafefsaefceholder.typicode.com/todos/1"

// const fetchData = () => {
//   console.log('start');
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((data) => data.json())
// }

// fetchData()
//   .then((response) => console.log(response))
//   .catch(e => console.log(e))
//   .finally(() => console.warn('finally'))
  

const fetchData = async () => {
  try {
    console.log('start');
    await delay(2000)
    const resp = await fetch(url)
    console.log(resp);
    const data = await resp.json()
    console.log(data);
  } catch {
    console.error('error')
  } finally {
    console.warn('finally')
  }
  
}
fetchData()