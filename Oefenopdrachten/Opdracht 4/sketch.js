function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let gameOver = false;
let message = "Jij bent X — jouw beurt!";

function setup() {
  createCanvas(600, 700);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);

  // Titel
  fill(255);
  textSize(40);
  text("Boter, Kaas & Eieren", width / 2, 50);

  // Bord
  let size = 180;
  let startX = 30;
  let startY = 110;

  stroke(255);
  strokeWeight(5);

  for (let i = 1; i < 3; i++) {
    line(startX + i * size, startY,
         startX + i * size, startY + 3 * size);

    line(startX, startY + i * size,
         startX + 3 * size, startY + i * size);
  }

  // X en O tekenen
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = startX + col * size + size / 2;
      let y = startY + row * size + size / 2;

      if (board[row][col] === "X") {
        stroke(255);
        strokeWeight(12);
        let offset = 50;
        line(x - offset, y - offset, x + offset, y + offset);
        line(x + offset, y - offset, x - offset, y + offset);
      }

      if (board[row][col] === "O") {
        noFill();
        stroke(255);
        strokeWeight(12);
        circle(x, y, 110);
      }
    }
  }

  noStroke();
  fill(255);
  textSize(24);
  text(message, width / 2, 675);
}

function mousePressed() {
  if (gameOver) {
    resetGame();
    return;
  }

  let size = 180;
  let startX = 30;
  let startY = 110;

  let col = floor((mouseX - startX) / size);
  let row = floor((mouseY - startY) / size);

  if (
    row >= 0 && row < 3 &&
    col >= 0 && col < 3 &&
    board[row][col] === ""
  ) {
    board[row][col] = "X";

    if (checkWinner("X")) {
      message = "🏆 Jij hebt gewonnen! Klik om opnieuw te spelen.";
      gameOver = true;
      return;
    }

    if (isBoardFull()) {
      message = "🤝 Gelijkspel! Klik om opnieuw te spelen.";
      gameOver = true;
      return;
    }

    computerMove();

    if (checkWinner("O")) {
      message = "💀 Computer wint! Klik om opnieuw te spelen.";
      gameOver = true;
      return;
    }

    if (isBoardFull()) {
      message = "🤝 Gelijkspel! Klik om opnieuw te spelen.";
      gameOver = true;
    }
  }
}

function computerMove() {
  let empty = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        empty.push({ row, col });
      }
    }
  }

  if (empty.length > 0) {
    let move = random(empty);
    board[move.row][move.col] = "O";
  }
}

function checkWinner(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) return true;

    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) return true;
  }

  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) return true;

  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) return true;

  return false;
}

function isBoardFull() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === "") return false;
    }
  }
  return true;
}

function resetGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  gameOver = false;
  message = "Jij bent X — jouw beurt!";
}