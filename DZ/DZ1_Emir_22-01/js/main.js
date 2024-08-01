const emailTxt = document.querySelector('#email')
const passwordTxt = document.querySelector('#password')
const logIn = document.querySelector('#logIn')
const block = document.querySelector('#block');

const emailCheck = /^[a-zA-Z0-9]+@gmail.com$/
const passwordCheck = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/g

logIn.addEventListener('click', () => {
    emailTxt.value.match(emailCheck) ? console.log('email is correct') : console.log('email is not correct')
    passwordTxt.value.match(passwordCheck) ? console.log('password is correct') : console.log('password is not correct')
})


let x = 0;
let y = 0;
const speed = 5;
const limit = 400;

function moveBlock() {
    if (x < limit && y === 0) x += speed;
    else if (x === limit && y < limit) y += speed;
    else if (y === limit && x > 0) x -= speed;
    else if (x === 0 && y > 0) y -= speed;

    block.style.left = `${x}px`;
    block.style.top = `${y}px`;

    setTimeout(moveBlock, 10);
}

moveBlock();
