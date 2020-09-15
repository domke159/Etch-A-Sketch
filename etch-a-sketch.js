const container = document.getElementById("container");

let canvasSize = Number(prompt("Enter amount of squares per side to make the new grid"));

let resetButton = document.createElement("button");
resetButton.innerHTML = "Reset Grid";
document.body.appendChild(resetButton);

function makeRows(_canvasSize) {
  const rows = canvasSize
  const cols = canvasSize
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', 
        e => e.target.style.backgroundColor = "black"
    )
  };
};

resetButton.addEventListener('click', (e) => {
    reset();
});

var list= document.getElementsByClassName("events");

function reset() {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
    makeRows(canvasSize)
}

makeRows(canvasSize);