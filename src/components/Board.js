import Button from "./Button";
import classes from '../css-modules/Board.module.css';
function Board({squares, onPlay, mode}){
  const handleSquareClick=(i)=>{
    onPlay(i)
  }

    return(
        <div className={mode==='Dark'?classes.board_l:classes.board_d}>
            <Button value={squares[0]} onSquareClick={()=>{handleSquareClick(0)}} mode={mode}/>
            <Button value={squares[1]} onSquareClick={()=>{handleSquareClick(1)}} mode={mode}/>
            <Button value={squares[2]} onSquareClick={()=>{handleSquareClick(2)}} mode={mode}/>
            <Button value={squares[3]} onSquareClick={()=>{handleSquareClick(3)}} mode={mode}/>
            <Button value={squares[4]} onSquareClick={()=>{handleSquareClick(4)}} mode={mode}/>
            <Button value={squares[5]} onSquareClick={()=>{handleSquareClick(5)}} mode={mode}/>
            <Button value={squares[6]} onSquareClick={()=>{handleSquareClick(6)}} mode={mode}/>
            <Button value={squares[7]} onSquareClick={()=>{handleSquareClick(7)}} mode={mode}/>
            <Button value={squares[8]} onSquareClick={()=>{handleSquareClick(8)}} mode={mode}/>  
        </div>
    )
}

export default Board;