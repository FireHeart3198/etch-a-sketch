const buttons = document.querySelector('.button-container');

buttons.addEventListener('click', function (e) {
    const checkLength = prompt("How many squares?");
    maxSquares(checkLength);
    sizeGrid(gridLength);
    createGrid(gridLength)
    startDrawing(e);
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
    style.textContent = `.square {
                        height: ${squareSize}px; 
                        width: ${squareSize}px;}`;
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

function startDrawing(e) {
    const allSquares = document.querySelectorAll('.square')
    let targetButton = e.target.className;
    let count;
    let hue;
    if (targetButton !== "random-colour") {
        count = 0;
        hue = Math.floor(Math.random() * 360);
    }
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', function (e) {
            switch(targetButton) {
                case "adjust-size":
                    changeColour(e.target,hue);
                break;

                case "random-colour":
                    randomiseColour(e.target);
                break;

                case "change-to-black":
                    changeToBlack (e.target, hue, count);
                    count += 1;
                break;
                }
        })
    })
}

function changeColour (currentSquare, hue) {
    currentSquare.style.cssText = `background-color: hsl(${hue}, 50%, 50%)`;
}

function randomiseColour (currentSquare) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    currentSquare.style.cssText = `background-color:rgb(${red},${green},${blue})`
}

function changeToBlack (currentSquare, hue, count) {
    currentSquare.style.cssText = `background-color: hsl(${hue}, 100%, ${70-(8*count)}%)`;
}