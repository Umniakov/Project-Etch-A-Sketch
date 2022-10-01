const container = document.querySelector('.container');
const input = document.querySelector('.input');
const submit = document.querySelector('#button1')
const SQUARE = 640000;

for (let i = 0; i < 256; i++) {
    let baby = document.createElement('div');
    baby.classList.add('pixel')
    container.appendChild(baby);
}
listenAfterSizeChanged();


submit.addEventListener('click', gridMaker);

function gridMaker(e) {
    e.preventDefault();
    let input = document.getElementById('textbox');
    let inputInt = Number(input.value);
    if (inputInt < 100 && 0 < inputInt) {
        resizeField(inputInt)
    }
}

function resizeField (inputInt) {
    console.log(inputInt)
    container.innerHTML= '';
    let size = Number(Math.sqrt(SQUARE / Math.pow(inputInt, 2))).toFixed(5);
    console.log(size);
    container.classList.remove('default');
    for (let i = 0; i < Math.pow(inputInt, 2); i++) {
        let baby = document.createElement('div');
        baby.style.width = `${size}px`;
        baby.style.height = `${size}px`;
        baby.classList.add('pixel');
        container.appendChild(baby);
}
    listenAfterSizeChanged();
}

function listenAfterSizeChanged () {
const pixel = document.querySelectorAll('.pixel');
pixel.forEach(e => e.addEventListener('mouseover', changeColor));
function changeColor(e) {
    e.target.classList.add('red');
    console.log(e.target)
}
}