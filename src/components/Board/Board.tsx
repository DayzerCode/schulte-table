import { arrayShuffle } from "../../utils/arrayShuffle";
import Cell from "./Cell/Cell";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxSlices/store";
import { nextIndex } from "../../reduxSlices/gameSlice";

import style from './Board.module.css'

const Board = () => {
  const { currentBoard, process: { currentIndex } } = useSelector((state: RootState) => state.game);
  const [shuffledBoard, setShuffledBoard] = useState<string[] | number[] | null>(null);
  const indexRef = useRef<number>(0);
  indexRef.current = currentIndex;
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentBoard.length > 0) {
      setShuffledBoard(arrayShuffle(currentBoard));
    }
  }, [currentBoard]);

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

