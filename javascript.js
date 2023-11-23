const sizeButton = document.querySelector('.adjust-size')

sizeButton.addEventListener('click', () => gridLength = prompt("How many squares?"))

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