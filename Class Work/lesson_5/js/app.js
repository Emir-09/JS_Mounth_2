const som = document.querySelector('#som')
const usd = document.querySelector('#usd')

// som.addEventListener('input', (e) => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'data/data.json')
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send()

//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         console.log(data);
//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })


const convert = (elem, target, isTrue) => {
    elem.addEventListener('input', e => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data/data.json')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send()

        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            isTrue 
                ? target.value = (elem.value / data.usd).toFixed(2)
                : target.value = (elem.value * data.usd).toFixed(2)
            
            elem.value === "" && (target.value = '')
        })
    })
}

convert(som, usd, true)
convert(usd, som, false)