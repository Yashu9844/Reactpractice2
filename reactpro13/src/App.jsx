import React, { useState } from "react";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(squares);

  const handleSquareClick = (i) => {
    if (squares[i] || winner) return; // Ignore if square is filled or game is won
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Top-left to bottom-right diagonal
      [2, 4, 6], // Top-right to bottom-left diagonal
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
          <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
          <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
          <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
          <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
          <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
          <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
        </div>
      </div>
      <button className="restart-button" onClick={restartGame}>
        Restat
      </button>
    </div>
  );
};

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default App;
