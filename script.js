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

        // Inicializa a opacidade no estilo inline
        grid.dataset.opacity = "0.0";

        // Add the hover effect to new cells
        grid.addEventListener("mouseenter", function () {
            let currentOpacity = parseFloat(grid.dataset.opacity); // Lê a opacidade do dataset

            if (currentOpacity < 1) {
                currentOpacity = (currentOpacity + 0.1).toFixed(1); // Incrementa a opacidade
                grid.dataset.opacity = currentOpacity; // Atualiza o dataset
            }

            const randomColor = randomBackgroundColor();
            grid.style.backgroundColor = `rgba(${randomColor.r}, ${randomColor.g}, ${randomColor.b}, ${currentOpacity})`;
        });

        canvasContainer.appendChild(grid);
    }
}

function randomBackgroundColor() {
    // Generate random values for red, green, and blue components between 0 and 255.
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return { r: x, g: y, b: z };
}

// Button to reset grid
const button = document.querySelector("#reset-btn");

button.addEventListener("click", () => {
    let squaresNumber = parseInt(prompt("How many squares per side do you want for the new grid?"));

    if (Number.isInteger(squaresNumber) && squaresNumber > 0 && squaresNumber <= 100) {
        createSquares(squaresNumber); // Create a new grid with the specified size
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

let squaresNumber = 16; // Initial grid size
createSquares(squaresNumber);