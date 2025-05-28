let gridSize = 50;
let r = 0;
let g = 0;
let b = 0;
let sketchPad = document.querySelector('#sketchPad');
// fetch value of range selector
let slider = document.querySelector('#myRange');
let output = document.querySelector('#value');
output.textContent = slider.value;

slider.addEventListener('input', (e) => {
    output.textContent = `${slider.value}`;
    gridSize = Number(output.textContent);
});
// use slider value to make a grid of selected size

function makeGrid(){
    for(let i=0; i<gridSize; i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for(let j=0; j<gridSize; j++){
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            row.appendChild(cell);
        }
        sketchPad.appendChild(row);
    }
}

function clear(){
        while(sketchPad.firstChild){
            sketchPad.removeChild(sketchPad.firstChild);
        }
}

//Function to change background color to black for each cell in class .cell

function bAndW(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            cell.style.backgroundColor = 'black';
        });
    });
}

//Function to generate random rgb values

function rgbGen(){
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
        }

//Function for progressive opacity

// function opacity(){
//     let cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//             cell.addEventListener('mouseenter', (e) => {
//                 let currentOpacity = parseFloat(cell.style.opacity) || 0;
//                 let newOpacity = Math.min(currentOpacity + 0.1, 1);
//                 cell.style.opacity = newOpacity;
//                 cell.style.backgroundColor = 'black';
//             });
//     });
// }

//Function to change the background color to a random rgb value for each cell in class .class

function rgb(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
        rgbGen();
        cell.style.backgroundColor = `rgb(`+r+`,`+g+`,`+b+`)`;
        });
    });
}

// Add functionality to "set size of grid" button

let setSz = document.querySelector('#setSize');
setSz.addEventListener('click', (e) => {
    clear();
    makeGrid();
});

//Add functionality to black & white button

let BW = document.querySelector('#BW');
BW.addEventListener('click', (e) => {
    bAndW();
});

//Add functionality to Vivid button

let vivid = document.querySelector('#Vivid');
vivid.addEventListener('click', (e) => {
    rgb();
});

//Add functionality to Opacity button

// let opacityBtn = document.querySelector('#Opacity');
// opacityBtn.addEventListener('click', (e) => {
//     opacity();
// });