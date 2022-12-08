import Board from "../../components/Board/Board";
import NextTarget from "../../components/NextTarget/NextTarget";
import Timer from "../../components/Timer/Timer";

import style from "./Game.module.css";

const Game = () => {
  return (
    <div className={style.wrap}>
      <div className={style.topPanel}>
        <NextTarget />
        <Timer />
      </div>
      <Board />
    </div>
  );
}

export default Game; 
