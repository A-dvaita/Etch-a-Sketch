let gridSize = 50;
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

// Add functionality to set size of grid button

let setSz = document.querySelector('#setSize');
setSz.addEventListener('click', (e) => {
    makeGrid();
    // setSz.addEventListener('click', (e) => {
    //     location.reload();
    // });
});