import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Board from "../../components/Board/Board";
import NextTarget from "../../components/NextTarget/NextTarget";
import Timer from "../../components/Timer/Timer";
import { initCurrentBoard } from "../../reduxSlices/gameSlice";
import { RootState } from "../../reduxSlices/store";
import { createBoard } from "../../utils/createBoard/createBoard";

import style from "./Game.module.css";

const Game = () => {
  const { parameters: { symbolType, size, isInverted }, currentBoard } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    run();
  }, []);


  const run = () => {
    const board = createBoard({ size, symbolType, isInverted: isInverted });
    dispatch(initCurrentBoard(board));
  }

  return (
    <div className={style.wrap}>
      {currentBoard.length > 0 && <>
        <div className={style.topPanel}>
          <NextTarget />
          <Timer />
        </div>
        <Board />
        <div className={style.buttonBlock}>
          <button className="btn-primary" onClick={run}>Restart</button>
          <Link className="btn-primary" to={"/preparation-for-game"}>Back to preparation</Link>
        </div>
      </>}
    </div>
  );
}

export default Game;
