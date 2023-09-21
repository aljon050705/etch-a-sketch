canvas = document.querySelector('.canvas');
const canvasWidth = 900;

function paintCell(e) {
    //console.log(this)
    //console.log(e);
    cell = e.target;
    if (e.altKey) {
        cell.style.backgroundColor = 'white';
    } else {
        cell.style.backgroundColor = 'black';
    }
}

function generateCanvas(size) {
    const gridSize = size**2;
    for (let i=0; i < gridSize; i++) {
        cell = document.createElement(`grid${i}`);
        cell.classList.add('cell');
        cell.style.width = `${900/size}px`;
        cell.style.height = `${900/size}px`;
        //cell.addEventListener('mousedown',paintCell)
        canvas.appendChild(cell);
    }
}

let mousedown = false;

function addMouseMoveListener(e) {
    e.preventDefault();
    canvas.addEventListener('mousemove', paintCell);
}

function removeMouseMoveListener(e) {
    e.preventDefault();
    canvas.removeEventListener('mousemove', paintCell);
}

document.addEventListener('mousedown', addMouseMoveListener)
document.addEventListener('mouseup', removeMouseMoveListener)

generateCanvas(prompt('size'));