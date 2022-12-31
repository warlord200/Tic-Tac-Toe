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
    gameBoard.innerHTML = "Hey";

    // for (let i = 1; i < 10; i++) {
    //   const cell = document.createElement("div");
    //   cell.classList.add("cell");
    //   cell.setAttribute("id", gameBoard.board[i].id);
    //   gameBoard.appendChild(cell);
    // }
  };
  return { render };
})();

game.generateBoard();
displayController.render();
