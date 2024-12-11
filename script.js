const canvasContainer = document.querySelector("#canvas.container");

function createSquares(num) {
    canvasContainer.innerHTML = ""; // Clears old squares inside the grid

    for (let i = 0; i < num * num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("paintable-square");

        // Calculates and defines the size of each cell
        const cellSize = 960 / num; // 960px is the total size of the canvas
        grid.style.width = `${cellSize}px`;
        grid.style.height = `${cellSize}px`;

        // Add the hover effect to new cells
        grid.addEventListener("mouseenter", function () {
            grid.style.backgroundColor = "black";
        });

        canvasContainer.appendChild(grid);
    }
}


// Button to reset grid
const button = document.querySelector("#reset-btn");

button.addEventListener("click", () => {
    let squaresNumber = parseInt(prompt("How many squares per side do you want for the new grid?"))

    if (Number.isInteger(squaresNumber) && squaresNumber > 0 && squaresNumber <= 100) {
        createDivs(squaresNumber); // Create a new grid with the specified size
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

let squaresNumber = 16; // Initial grid size
createSquares(squaresNumber);