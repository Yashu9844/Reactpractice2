import React from 'react'
import { useState } from 'react';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className='container'>
      <div className="row">
        <Square   value={} onClick={} />
        <Square   value={} onClick={} />
        <Square   value={} onClick={} />
      </div>
      <div className="row">
      <Square   value={} onClick={} />
        <Square   value={} onClick={} />
        <Square   value={} onClick={} />
      </div>
      <div className="row">
      <Square   value={} onClick={} />
        <Square   value={} onClick={} />
        <Square   value={} onClick={} />
      </div>
      <button className='restart-button' onClick={restartGame}>Restart Game</button>
    </div>
  )
}

const Square = ({value,onClick })=>{
return (
  <button className='square' onClick={onClick} >{value}</button>
)
}


export default App
