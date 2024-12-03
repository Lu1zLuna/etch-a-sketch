const canvasContainer = document.querySelector("#canvas.container");

function createDivs(num) {
    canvasContainer.innerHTML = "";

    for (let i = 0; i < num * num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("paintable-div");
        canvasContainer.appendChild(grid);
    }
}

let squaresNumber = 16;

const paintableGrid = document.querySelectorAll(".paintable-div");

paintableGrid.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.setAttribute("style", "background-color: black;");
    })
});

const button = document.querySelector("#reset-btn");

button.addEventListener("click", () => {
    let squaresNumber = parseInt(prompt("How many squares per side do you want for the new grid?"))

    if (Number.isInteger(squaresNumber) && squaresNumber > 0) {
        createDivs(squaresNumber); // Create a new grid with the specified size
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

createDivs(squaresNumber);