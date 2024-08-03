const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')


const hideTabContent = () => {
    tabContent.forEach(item =>{
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

tabsParent.addEventListener('click', e => {
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

const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')


const openModal = () => {
    modal.classList.remove('hide')
    modal.classList.add('show')
    document.body.style.overflow = 'hidden'
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.remove('show')
            modal.classList.add('hide')
            document.body.style.overflow = ''
        }
    })
}

openModalBtn.addEventListener('click', openModal)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', closeModal)

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
    }, 2000)
}

const stopAutoSwitch = () => {
    clearInterval(autoSwitchInterval)
}

tabs.forEach((item, index) => {
    item.addEventListener('click', e => {
        const target = e.target
        stopAutoSwitch()
        setTimeout(startAutoSwitch, 6000)
        if (target === item) {
            tabNumber = index
        }
    })
})


window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        openModal()
        console.log(window.scrollY, window.innerHeight, document.documentElement.scrollHeight);
    }
})


hideTabContent()
showTabContent()
startAutoSwitch()
console.log(window.scrollY, window.innerHeight, document.documentElement.scrollHeight);


