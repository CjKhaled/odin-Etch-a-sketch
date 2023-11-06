const container = document.querySelector(".container");
const button = document.querySelector("button");

// For some reason it was printing an extra square
let amountOfSquares = 16;

function createGrid(amountOfSquares) {
  container.style.gridTemplateColumns = `repeat(${amountOfSquares}, 16px)`;
  for (let count = 0; count !== amountOfSquares ** 2 - 1; count++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
  }
}

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function addDraw() {
  const highlightSquare = document.getElementsByClassName("square");
  // Turned it into an array so I can use forEach
  const eachSquare = [...highlightSquare].forEach((element) => {
    // Chose to change the class whenever the mouse enters a square
    element.addEventListener("mouseenter", (e) => {
      e.target.setAttribute("class", "color-square");
    });
  });
}

createGrid(amountOfSquares);
addDraw();

// When button is clicked, we delete the old grid and make a new one
button.addEventListener("click", (e) => {
  let number = prompt("Number of squares per side: ");
  amountOfSquares = number;
  deleteGrid();
  createGrid(amountOfSquares);
  addDraw();
});
