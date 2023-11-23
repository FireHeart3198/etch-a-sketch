const sizeButton = document.querySelector('.adjust-size');

sizeButton.addEventListener('click', function c() {
    gridLength = prompt("How many squares?");
    sizeGrid(gridLength);
})

function sizeGrid (gridLength) {
    const head = document.querySelector('head')
    if (document.querySelector('style') !== null) {
        const previousStyle = document.querySelector('style')
        console.log(previousStyle)
        previousStyle.remove();
        console.log(previousStyle)
    }
    console.log(gridLength)
    squareSize = 960/parseInt(gridLength);
    console.log(squareSize)
    const style = document.createElement('style');
    style.textContent = `.square {height: ${squareSize}px; width: ${squareSize}px;}`;
    console.log(style)
    head.appendChild(style);
}

const container = document.querySelector('.container');


for (let i = 1; i <= 16; i++) {
    for (let i = 1; i <= 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

const allSquares = document.querySelectorAll('.square')

allSquares.forEach(square => {
    square.addEventListener('mouseenter', function (e) {
        changeColour(e.target)
    })
})


function changeColour (currentSquare) {
    currentSquare.classList.toggle('red')
}


// On button press show prompt
    // event listener click
// Info from prompt put into sizing calculation
    // gridLength into function 
    // 960/grid Length (parsed into int)
    // css style height and width with resulting info
// sizing calculation put into for loop