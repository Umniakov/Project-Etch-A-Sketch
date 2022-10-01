const container = document.querySelector('.container');
const input = document.querySelector('.input');
const submit = document.querySelector('#button-submit');
const reset = document.querySelector('#button-reset');
const color = document.querySelector('#fav-color');
const rainbow = document.querySelector('#rainbow');
const shadowing = document.querySelector('#shadowing')
const SQUARE = 640000;
let rainbowModCheck = false;
let strengthModCheck = false;

let colorHere = color.addEventListener('input', takeColor)
let rainbowMod = rainbow.addEventListener('change', makeRainbow);
let strength = shadowing.addEventListener('change', makeStrength);

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

submit.addEventListener('click', e => {
    e.preventDefault(); 
    gridMaker();
    });

function gridMaker() {
    let input = document.getElementById('textbox');
    let inputInt = Number(input.value);
    if (inputInt < 100 && 0 < inputInt) {
            resizeField(inputInt);
    } else {
        resizeField(16);
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
    if (strengthModCheck) {
        e.target.style.backgroundColor = 'blue';
    } else {
        e.target.style.backgroundColor = setFinalColor();
    // console.log(e.target)
    }
    }
}

reset.addEventListener('click', resetFilledBoxes);

function resetFilledBoxes(e) {
    e.preventDefault();
    console.log('hihi')
    gridMaker();
}



function takeColor() {
    console.log(color.value)
    return color.value;
}


function makeRainbow() {
    
    if (this.checked) {
        rainbowModCheck = true; 
    } else {
        rainbowModCheck = false;
    }
}

function makeStrength() {
    if (this.checked) {
        strengthModCheck = true;
        rainbow.disabled = true;
    } else {
        strengthModCheck = false;
        rainbow.disabled = false;
    }
}

function setFinalColor() {
    let color = '';
    if (rainbowModCheck && !strengthModCheck) {
        color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
        return color;
    } else if (strengthModCheck) {
        color = addAlpha(`${takeColor()}`);
        console.log(color)
        return color;
    } else {
        color = takeColor();
        return color;
    }
}

function addAlpha(color) {
    console.log(color.length)
    // if (color.length)
    let sum = 0;
    let tenPercent = Math.round(255 * 0.1);
    console.log(color + tenPercent.toString(16));
    sum += tenPercent;
    return color + tenPercent.toString(16);

}