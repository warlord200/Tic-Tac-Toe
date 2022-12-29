const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
})();

const person = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};
