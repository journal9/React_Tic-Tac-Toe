import { useState } from "react";
import Board from "./Board";
import classes from "../css-modules/Game.module.css";
import React from "react";

// Function calculates if the game is won or not.
function calculateWinner(board) {
  let winnerBoards = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerBoards.length; i++) {
    let [a, b, c] = winnerBoards[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [mode, setMode] = useState('Dark')
  let status = "next move";
  let currentSquares = history[currentMove];

  const handlePlay = (i) => {
    let newSquare = currentSquares.slice();
    if (!currentSquares[i] && !calculateWinner(newSquare)) {
      if (currentMove % 2 === 0) {
        newSquare[i] = "X";
      } else {
        newSquare[i] = "O";
      }
      let newHistory = [...history.slice(0, currentMove + 1)];
      setHistory([...newHistory,newSquare]);
      setCurrentMove(currentMove + 1);

    }
  };
  const winner = calculateWinner(currentSquares.slice());
  if (winner) {
    status = "Winner: " + winner;
  }

  const jumpToMove=(move)=>{
    setCurrentMove(move)
  }

  const moves=history.map((squares,move)=>{
    let description=`Go to move ${move}`;
    return(
      <li key={move}>
        <button onClick={() => jumpToMove(move)}>{description}</button>
      </li>
    )
  })

  function changeMode(){
    if(mode==='Light'){
      setMode('Dark');
    }
    else{
      setMode('Light');
    }
  }

  function startNew(){
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className={classes.game}>
      <div className={mode==='Dark'?classes.status_bullet_l:classes.status_bullet_d}>{status}</div>
      <Board squares={currentSquares} onPlay={handlePlay} mode={mode}/>
      <button onClick={changeMode}>
        Change mode
      </button>
      <button onClick={startNew}>
        New Game
      </button>
      <div className={classes.game_moves}>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default Game;
