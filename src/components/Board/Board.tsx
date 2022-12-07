import { arrayShuffle } from "../../utils/arrayShuffle";
import { createBoard } from "../../utils/createBoard";
import Cell from "./Cell/Cell";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initState, nextIndex } from "../../reduxSlices/gameParametersSlice";
import { RootState } from "../../reduxSlices/store";
import { TypeTableEnum } from "../../entities/enum/typeTableEnum";
import { GameModeEnum } from "../../entities/enum/gameModeEnum";

import style from './Board.module.css'

const boardSize = 3;
const board = createBoard({ boardSize: boardSize, type: TypeTableEnum.NUMBERS, isInverted: false });
const Board = () => {
  const currentIndex = useSelector((state: RootState) => state.gameParameters.currentIndex);
  const currentBoard = useSelector((state: RootState) => state.gameParameters.currentBoard);
  const [shuffledBoard] = useState<string[] | number[]>(arrayShuffle(board));
  const indexRef = useRef<number>(0);
  indexRef.current = currentIndex;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initState({
      currentBoard: board,
      mode: GameModeEnum.NORMAL,
      boardSize: boardSize
    }));
  }, []);

  const onClick = useCallback((value: string | number) => {
    if (currentBoard[indexRef.current] === value) {
      dispatch(nextIndex());
      return true;
    }
    return false;
  }, [currentBoard]);

  return <div className={style.board}>
    {shuffledBoard && shuffledBoard.map((value, index) => {
      const position = index + 1;
      return <Cell key={value} value={value} position={position} onClick={onClick} />
    })}
  </div>;
};
export default Board;

