import classes from '../css-modules/Button.module.css';
function Button({ value, onSquareClick, mode }) {
    return (
      <button className={mode==='Dark'?classes.btn_l:classes.btn_d} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Button;