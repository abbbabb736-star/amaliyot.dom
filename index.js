let cells = document.querySelectorAll(".box");
let currentPlayer = "X";
let status = document.getElementById("status");

let winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;

    box.textContent = currentPlayer;

    if (checkWin()) {
      status.textContent = currentPlayer + "   afsuski yutdi  ";
      disableBoard();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWin() {
  return winCombos.some((combo) => {
    return combo.every((i) => cells[i].textContent == currentPlayer);
  });
}

function disableBoard() {
  cells.forEach((box) => (box.style.pointerEvents = "none"));
}
