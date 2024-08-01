const wrapper = document.querySelector('.wrapper')
const paragraphs = Array.from(wrapper.querySelectorAll('div'))
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

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
paragraphs.forEach((item) => {
    item.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", 'data.json')
        request.setRequestHeader('Content_Type', "application/json")
        request.send()
        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)

            switch (item.classList[0]) {
                case som.id:
                    usd.value = (som.value / data.usd.som).toFixed(2)
                    euro.value = (som.value / data.euro.som).toFixed(2)
                    if (som.value === "") {
                        usd.value = ""
                        euro.value = ""
                    }
                    break
                case usd.id:
                    som.value = (usd.value * data.usd.som).toFixed(2)
                    euro.value = (usd.value * data.euro.usd).toFixed(2)
                    if (usd.value === "") {
                        som.value = ""
                        euro.value = ""
                    }
                    break
                default:
                    som.value = (euro.value * data.euro.som).toFixed(2)
                    usd.value = (euro.value * data.usd.euro).toFixed(2)
                    if (euro.value === "") {
                        som.value = ""
                        usd.value = ""
                    }
                    break
            }
            // isTrue
            //     ? target.value = (elem.value / data.usd).toFixed(2)
            //     : target.value = (elem.value * data.usd).toFixed(2)
            // if(isTrue){
            //     target.value = (elem.value / data.usd).toFixed(2)
            // } else {
            //     target.value = (elem.value * data.usd).toFixed(2)
            // }
            // elem.value === "" || (target.value = "")
            // elem.value === "" ? (target.value = "") : null
            // elem.value === "" && (target.value = "")
        })
    })
})