const container = document.querySelector(".container")


let amountOfSquares = 16**2 -1

for (let count = 0; count !== amountOfSquares; count++) {
    const square = document.createElement("div")
    square.setAttribute('class', 'square')
    container.appendChild(square)
}
