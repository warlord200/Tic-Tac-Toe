const game = (() => {
  let board = [];
  // generate the board
  const generateBoard = () => {
    for (let i = 0; i < 9; i++) {
      const cell = {
        id: i,
        value: null,
      };
      board.push(cell);
    }
  };
  return { board, generateBoard };
})();

const displayController = (() => {
  const render = () => {
    // render the board
    const gameBoard = document.querySelector(".game-board");

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", game.board[i].id);
      gameBoard.appendChild(cell);
      cell.addEventListener("click", () => {
        cell.textContent = "X";
        game.board[i].value = "X";
      });
    }
  };
  return { render };
})();

const player = (name, symbol) => {
};

game.generateBoard();
displayController.render();
