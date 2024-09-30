const canvasContainer = document.querySelector("#canvas.container");

function createDivs(num) {
    for (i = 0; i < num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("pixel-div");
        canvasContainer.appendChild(grid);
    }
}

createDivs(256);