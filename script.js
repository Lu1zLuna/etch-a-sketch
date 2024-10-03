const canvasContainer = document.querySelector("#canvas.container");

function createDivs(num) {
    for (i = 0; i < num * num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("pixel-div");
        canvasContainer.appendChild(grid);
    }
}

createDivs(20);

const gridList = document.querySelectorAll(".pixel-div");

gridList.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        // to be implemented
    })
})