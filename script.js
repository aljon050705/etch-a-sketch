canvas = document.querySelector('.canvas');
const viewportHeight = window.innerHeight;
const canvasWidth = canvas.clientWidth;
const paintColorPicker = document.getElementById('paintColor');
let paintColor = paintColorPicker.value;
paintColorPicker.addEventListener('change', () => paintColor = paintColorPicker.value)


function paintCell(e) {
    //console.log(this)
    //console.log(e);
    cell = e.target;
    if (e.altKey) {
        cell.style.backgroundColor = 'white';
    } else {
        cell.style.backgroundColor = paintColor;
    }
    console.log(paintColor)
}

function generateCanvas(size) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    const gridSize = size**2;
    for (let i=0; i < gridSize; i++) {
        cell = document.createElement(`grid${i}`);
        cell.classList.add('cell');
        cell.style.width = `${100/size}%`;
        cell.style.height = `${100/size}%`;
        //cell.addEventListener('mousedown',paintCell)
        canvas.appendChild(cell);
    }
}

function fillGrid(clear) {
    let cells = document.querySelectorAll('.cell')
    if (clear) {
        cells.forEach(element => {
            element.style.backgroundColor = paintColor;
        })
        return;
    } else {
        cells.forEach(element => {
            element.style.backgroundColor = 'white';
        })
    }
}

/*Painting Listener*/
function addMouseMoveListener(e) {
    e.preventDefault();
    paintCell(e);
    canvas.addEventListener('mousemove', paintCell); //Hold/drag paint feature
}

function removeMouseMoveListener(e) {
    e.preventDefault();
    canvas.removeEventListener('mousemove', paintCell);
}

canvas.addEventListener('mousedown', addMouseMoveListener)
document.addEventListener('mouseup', removeMouseMoveListener)

/*Fill and Clear*/
const clearGridButton = document.querySelector(".clear-grid-button")
clearGridButton.onclick = () => fillGrid(false);
const fillGridButton = document.querySelector(".fill-grid-button")
fillGridButton.onclick = () => fillGrid(true);

/*Grid Regenerate*/
const gridSizeInput = document.getElementById('gridSizeInput')
gridSizeInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') generateCanvas(gridSizeInput.value);
});






generateCanvas(32/*prompt('size')*/);