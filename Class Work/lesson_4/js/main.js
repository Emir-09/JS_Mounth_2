// const obj = {
//     name: 'Alex',
//     age: 21,
// }

// const data = JSON.stringify(obj)

// console.log(data, 'stringify');

// console.log(JSON.parse(data), 'parce');


// console.log(JSON.parse(JSON.stringify([1, 2, 3, 4, 5, 6])))


// const btn  = document.querySelector('button')

// btn.addEventListener('click', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'data.json')
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send()

//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//     })
    
// })


const btn  = document.querySelector('button')
const wrapper  = document.querySelector('.wrapper')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://static-basket-01.wbbasket.ru/vol0/data/all-poo-fr-v9.json')
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data);
        
        // data.results.forEach(item => {
        //     console.log(item.name)
        //     const block = document.createElement('div')
        //     block.style.height = '150px'
        //     block.style.width = '150px'
        //     block.style.marginTop = '10px'
        //     block.style.border = '1px solid'

        //     block.innerHTML = item.name
        //     wrapper.append(block)
        // })
    })
})