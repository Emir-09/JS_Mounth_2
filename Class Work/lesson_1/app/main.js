// const user = prompt("Tell me your name")

// const regExp  = /y/i

// console.log(user.match(regExp));


// const letter = "AaaBbbCcc"

// const regExp = /[Cc]]/gi

// const regExp = new RegExp('c', 'gi')

// console.log(letter.match(regExp));

// console.log(letter);

// const letter = '01sfdsfs3456789fsefghrg37625fesef73832'

// const regExp = /\w/g

// console.log(letter.replace(regExp, "*"));


// const phoneInput = document.querySelector('#phoneInput')
// const phoneCheck = document.querySelector('.phoneCheck')
// const phoneResults = document.querySelector('span')

// const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/


// phoneCheck.addEventListener('click', () => {
//     console.log(phoneInput.value)

//     if (regExp.test(phoneInput.value)) {
//         phoneResults.innerText = 'ok'
//         phoneResults.style.color = 'green'
//     } else {
//         phoneResults.innerText = 'not ok'
//         phoneResults.style.color = 'red'
//     }
// })


// let i = 0

// const incr = () => {
//     console.log(++i);
//     if (i < 500) {
//         incr()
//     }
// }

// incr()

const peopleObj = {
    Jhon: {
       age: 21,
       parents: {
        Tony: {
            age:51,
            parents: {
                Alex: {
                    age: 88,
                    parents: {
                        Alex: {
                            age: 88,
                            parents: {
                                Alex: {
                                    age: 88,
                                    parents: {
                                        Alex: {
                                            age: 88,
                                            parents: {
                                                Alex: {
                                                    age: 88,
                                                    parents: {
                                                        Alex: {
                                                            age: 88,
                                        
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        Kelly: {
            age: 49
        },
       },

    },
    Sem: {
        age: 15,
        parents: {
            Jihn: {
                age: 35,
            },
        },
    },
}


const parentsList = (obj) => {
    if (obj.parents) {
        for (let key in obj.parents) {
            console.log(key);
            parentsList(obj.parents[key])
        }
    } else {
        console.log('ooops..');
    }
}


for (let key in peopleObj) {
    parentsList(peopleObj[key])
}