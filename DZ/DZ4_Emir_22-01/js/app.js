const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')


const hideTabContent = () => {
    tabContent.forEach((item) =>{
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()


tabsParent.addEventListener('click', (e) => {
    const target = e.target
    if(target.classList.contains('tabheader__item')){
        tabs.forEach((item, index) => {
            if(target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
})

let autoSwitchInterval = null
let tabNumber = 0

const startAutoSwitch = () => {
    autoSwitchInterval = setInterval(() => {
        tabNumber++
        if (tabNumber >= tabs.length) {
            tabNumber = 0
        }
        hideTabContent()
        showTabContent(tabNumber)
        switchTabs(tabNumber)
    }, 2000)
}

const stopAutoSwitch = () => {
    clearInterval(autoSwitchInterval)
}

tabs.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        const target = e.target
        stopAutoSwitch()
        setTimeout(startAutoSwitch, 5000)
        if (target === item) {
            tabNumber = index
        }
    })
})

startAutoSwitch()

const switchTabs = (currentIndex) => {
    tabContent.forEach(item => item.classList.remove('active'));
    tabContent[currentIndex].classList.add('active');
}


const objectSale = document.querySelector('.objects_sale')

const requestForObjects = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "database/data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.goods.forEach((elem) => {
            const block = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('span')
            const span = document.createElement('p')

            img.style.backgroundImage = `url("${elem.img}")`
            console.log(elem.productName)
            span.innerHTML = elem.price
            p.innerHTML = elem.productName

            block.setAttribute('class', 'object')
            img.setAttribute('class', 'object__image')
            span.setAttribute('class', 'object__price')
            p.setAttribute('class', 'object__description')

            block.append(img, span, p)
            objectSale.append(block)
        })
    })
}

requestForObjects()
