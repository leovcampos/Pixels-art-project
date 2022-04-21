const tabel = document.querySelector('#pixel-board')

function tabelPixels (num){
    for(i = 0; i < num; i += 1){
        const sectionP = document.createElement('section');
        for(u = 0; u < num; u += 1){
            const divColun = document.createElement('div');
            divColun.className = 'pixel';
            sectionP.appendChild(divColun);
        }
        tabel.appendChild(sectionP);
    }
}
tabelPixels(5);

const colorSelect = document.querySelectorAll('.color');

for (let i = 0; i < colorSelect.length; i += 1){
    colorSelect[i].addEventListener('click', function(event){
        document.querySelector('.selected').classList.remove('selected');
        event.target.classList.add('selected');
    })
}


function changeColor (){
    const pixels = document.querySelectorAll('.pixel');
    for (i = 0; i < pixels.length; i += 1){
    pixels[i].addEventListener('click', function(event){
    const element = document.querySelector('.selected');
    const cssObj = window.getComputedStyle(element);
    let cssColor = cssObj.getPropertyValue('background-color');
    
    event.target.style.backgroundColor = cssColor;
})
}
}
changeColor();

const buttonReset = document.createElement('button');
const divReset = document.querySelector('#reset');
buttonReset.id = 'clear-board';
buttonReset.innerText = 'Limpar'
divReset.appendChild(buttonReset);

function reset(){
    const pixels = document.querySelectorAll('.pixel');
    buttonReset.addEventListener('click', function(){
        for(i = 0; i < pixels.length; i += 1){
            pixels[i].style.backgroundColor = 'white';
        }
    })
} reset();


const inputB = document.createElement('input');
const buttonNum = document.createElement('button');
const divChoice = document.querySelector('#choiceNum');
inputB.type = 'number';
inputB.min = 1;
inputB.id = 'board-size';
inputB.placeholder = 'digite um número';
buttonNum.innerText = 'Start';
buttonNum.id = 'generate-board';

function choice(){
    buttonNum.addEventListener('click', function(){
        if(inputB.value == ''){
            alert('Board inválido!');
            return;
        } 
        if(inputB.value < 5){
            inputB.value = 5;
        } 
        if (inputB.value > 50){
            inputB.value = 50;
        }
        tabel.textContent = '';
        tabelPixels(inputB.value);
        changeColor();
        reset();
    })
}
choice();

divChoice.appendChild(inputB);
divChoice.appendChild(buttonNum);

function colorAlet(){
    for(i = 1; i < colorSelect.length; i += 1){
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const rgb = `rgb(${red}, ${green}, ${blue})`;
        colorSelect[i].style.backgroundColor = rgb;
    }
}
colorAlet();