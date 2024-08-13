const wrapper = document.querySelector('.wrapper')
const paragraphs = Array.from(wrapper.querySelectorAll('div'))
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const url = 'data/data.json'


paragraphs.forEach((item) => {
    item.addEventListener("input", async () => {
        try {
            const request = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            if (!request.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await request.json()
            
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
        } catch(error) {
            console.error('There was a problem with the fetch operation: ', error)
        }
    })
})