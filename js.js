const container = document.querySelector('.container');
const input = document.querySelector('.input');
const submit = document.querySelector('#button-submit');
const reset = document.querySelector('#button-reset');
const color = document.querySelector('#fav-color');

const SQUARE = 640000;




defaultGrid();

function defaultGrid() {
    container.innerHTML = '';
    for (let i = 0; i < 256; i++) {
        let baby = document.createElement('div');
        baby.classList.add('pixel')
        container.appendChild(baby);
    }
    listenAfterSizeChanged();
}

submit.addEventListener('click', gridMaker);

function gridMaker() {
    let input = document.getElementById('textbox');
    let inputInt = Number(input.value);
    if (inputInt < 100 && 0 < inputInt) {
            resizeField(inputInt);
    } else {
    defaultGrid();  
    }
}

function resizeField (inputInt) {
    container.innerHTML= '';
    let size = Number(Math.sqrt(SQUARE / Math.pow(inputInt, 2))).toFixed(5);
    console.log(size);
    console.log(inputInt * inputInt)
    container.classList.remove('default');
    for (let i = 0; i < Math.pow(inputInt, 2); i++) {
        let baby = document.createElement('div');
        baby.classList.add('pixel');
        baby.style.width = `${size}px`;
        baby.style.height = `${size}px`;
        container.appendChild(baby);
        }   
    listenAfterSizeChanged();
}

function listenAfterSizeChanged () {
const pixel = document.querySelectorAll('.pixel');
pixel.forEach(e => e.addEventListener('mouseover', changeColor));
function changeColor(e) {
    e.target.style.backgroundColor = `${takeColor()}`;
    console.log(e.target)
    }
}

reset.addEventListener('click', resetFilledBoxes);

function resetFilledBoxes() {
    console.log('hi')
    gridMaker();
}

let colorHere = color.addEventListener('input', takeColor)

function takeColor() {
    console.log(color.value)
    return color.value;
}

