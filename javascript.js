const sizeButton = document.querySelector('.adjust-size');

sizeButton.addEventListener('click', function c() {
    const checkLength = prompt("How many squares?");
    maxSquares(checkLength);
    sizeGrid(gridLength);
    createGrid(gridLength)
    startDrawing(gridLength);
})

function maxSquares (checkLength) {
    if (checkLength > 100) {
        for (let i = 0; i < 3; i++) {
            const newGridLength = prompt("Less than 100 please");
            if (newGridLength < 100) {
                return gridLength = newGridLength;
            }
        }
        return alert("Sorry, this etch-a-sketch is no longer available")
    } else if (isNaN(parseInt(checkLength))) {
        for (let i = 0; i < 3; i++) {
            const newGridLength = prompt("Number please");
            if (!!(isNaN(parseInt(checkLength)))) {
                return gridLength = newGridLength;
            }
        }
        return alert("Sorry, this etch-a-sketch is no longer available")
    } else {
        return gridLength = checkLength;
    }
}

function sizeGrid (gridLength) {
    const head = document.querySelector('head')
    if (document.querySelector('style') !== null) {
        const previousStyle = document.querySelector('style')
        previousStyle.remove();
    }
    squareSize = 960/parseInt(gridLength);
    const style = document.createElement('style');
    style.textContent = `.square {height: ${squareSize}px; width: ${squareSize}px;}`;
    head.appendChild(style);
}

const container = document.querySelector('.container');

function createGrid (gridLength) {
    if (document.querySelector('.square') !== null) {
        const previousGrid = document.querySelectorAll('.square')
        for (let i = 0; i < previousGrid.length; i++) {
            const previousSquare = document.querySelector('.square');
            previousSquare.remove();
        }
    }
    for (let i = 1; i <= parseInt(gridLength); i++) {
        for (let i = 1; i <= parseInt(gridLength); i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}

function startDrawing() {
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', function (e) {
            changeColour(e.target)
        })
    })
}

function changeColour (currentSquare) {
    currentSquare.classList.toggle('red')
}

const randomColourButton = document.querySelector('.random-colour')

randomColourButton.addEventListener('click', function c() {
    const checkLength = prompt("How many squares?");
    maxSquares(checkLength);
    sizeGrid(gridLength);
    createGrid(gridLength)
    startRandomColour(gridLength);
})

function startRandomColour () {
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', function (e) {
            randomiseColour(e.target)
        })
    })
}

function randomiseColour (currentSquare) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    currentSquare.style.cssText = `background-color:rgb(${red},${green},${blue})`
}

const changeToBlackButton = document.querySelector('.change-to-black')

changeToBlackButton.addEventListener('click', function () {
    const checkLength = prompt("How many squares?");
    maxSquares(checkLength);
    sizeGrid(gridLength);
    createGrid(gridLength)
    changeToBlack();
})

function changeToBlack() {
    const allSquares = document.querySelectorAll('.square')
    let initial = 0;
    let count = 1;
    const hue = Math.floor(Math.random() * 360);
    allSquares.forEach((square) => {
        square.addEventListener('mouseenter', function (e) {
            const square = e.target
            if (initial === 1) {
                square.style.cssText = `background-color: hsl(${hue}, 100%, ${70-(8*count)}%)`
                count += 1;
            }
            else if (initial === 0) {
                square.style.cssText = `background-color: hsl(${hue}, 100%, 70%);`
                initial = 1;
            }
        })
    })
}