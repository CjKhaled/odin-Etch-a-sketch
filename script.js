const container = document.querySelector(".container")

// For some reason it was printing an extra square
let amountOfSquares = 16**2 -1

for (let count = 0; count !== amountOfSquares; count++) {
    const square = document.createElement("div")
    square.setAttribute('class', 'square')
    container.appendChild(square)
}

const highlightSquare = document.getElementsByClassName('square')
// Turned it into an array so I can use forEach
const eachSquare = [...highlightSquare].forEach((element) => {
    // Chose to change the class whenever the mouse enters a square
    element.addEventListener('mouseenter', (e) => {
        e.target.setAttribute('class', "color-square")
    })
})


