import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../../components/Board/Board";
import NextTarget from "../../components/NextTarget/NextTarget";
import Timer from "../../components/Timer/Timer";
import { GameModeEnum } from "../../entities/enum/gameModeEnum";
import { initCurrentBoard } from "../../reduxSlices/gameSlice";
import { RootState } from "../../reduxSlices/store";
import { createBoard } from "../../utils/createBoard";

import style from "./Game.module.css";

const Game = () => {
  const { parameters: { symbolType, size, isInverted }, currentBoard } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    const board = createBoard({ size, symbolType, isInverted: isInverted, mode: GameModeEnum.EASY });
    dispatch(initCurrentBoard(board));
  }, []);
  return (
    <div className={style.wrap}>
      {currentBoard.length > 0 && <>
        <div className={style.topPanel}>
          <NextTarget />
          <Timer />
        </div>
        <Board />
      </>}
    </div>
  );
}

export default Game; 
