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