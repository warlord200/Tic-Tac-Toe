const game = (() => {
  let board = [];
  // generate the board
  const generateBoard = () => {
    for (let i = 1; i < 10; i++) {
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

    for (let i = 1; i < 10; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", game.board[i - 1].id);
      gameBoard.appendChild(cell);
    }
  };
  return { render };
})();

game.generateBoard();
displayController.render();
