const som = document.querySelector('#som')
const usd = document.querySelector('#usd')

// som.addEventListener('input', (e) => {
//     console.log(e.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET", 'data.json')
//     request.setRequestHeader('Content_Type', "application/json")
//     request.send()
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         console.log(data)
//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })

const convert = (elem, target, isTrue) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", 'data.json')
        request.setRequestHeader('Content_Type', "application/json")
        request.send()
        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            console.log(data)
            isTrue
                ? target.value = (elem.value / data.usd).toFixed(2)
                : target.value = (elem.value * data.usd).toFixed(2)
            // if(isTrue){
            //     target.value = (elem.value / data.usd).toFixed(2)
            // } else {
            //     target.value = (elem.value * data.usd).toFixed(2)
            // }
            // elem.value === "" || (target.value = "")
            // elem.value === "" ? (target.value = "") : null
            elem.value === "" && (target.value = "")
        })
    })
}

convert(som, usd, 7)
convert(usd, som, "")