const game = (() => {
  let board = [];
  // generate the board
  const generateBoard = () => {
    for (let i = 0; i < 9; i++) {
      const cell = {
        id: i,
        value: null,
      };
      game.board.push(cell);
    }
  };

  const checkWin = () => {
    //check x-axis win

    for (let i = 0; i < 7; i += 3) {
      if (
        game.board[i + 1].value === game.board[i + 2].value &&
        game.board[i].value === game.board[i + 1].value
      ) {
        if (game.board[i].value === null) continue;
        console.log("winner");
        game.resetBoard();
      }
    }
    // check y-axis win

    for (let i = 0; i < 3; i++) {
      if (
        game.board[i + 3].value === game.board[i + 6].value &&
        game.board[i].value === game.board[i + 3].value
      ) {
        if (game.board[i].value === null) continue;
        console.log("winner");
        game.resetBoard();
      }
    }

    // check diagonal win

    for (let i = 0; i < 3; i += 2) {
      if ((i = 0)) {
        if (game.board[i + 3].value === game.board[i + 6].value) {
          if (game.board[i].value === null) continue;
          console.log("winner");
          game.resetBoard();
        }
      } else {
        if (game.board[i + 2].value === game.board[i + 4].value) {
          if (game.board[i].value === null) continue;
          console.log("winner");
          game.resetBoard();
        }
      }
    }
  };
  const resetBoard = () => {
    const gameBoard = document.querySelector(".game-board");
    // remove all children
    while (gameBoard.firstChild) {
      gameBoard.removeChild(gameBoard.firstChild);
    }
    game.board = [];
    game.generateBoard();
    displayController.render();
  };
  return { board, generateBoard, checkWin, resetBoard };
})();

const displayController = (() => {
  // board rendering function
  const render = () => {
    const gameBoard = document.querySelector(".game-board");
    // render the board
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", game.board[i].id);
      gameBoard.appendChild(cell);
      cell.addEventListener("click", () => {
        cell.textContent = "X";
        game.board[i].value = "X";
        game.checkWin();
      });
    }
  };
  return { render };
})();

const player = (name, symbol) => {};

game.generateBoard();
displayController.render();
