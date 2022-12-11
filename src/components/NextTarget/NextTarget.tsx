import { useSelector } from 'react-redux';
import { RootState } from "../../reduxSlices/store";

import style from './Timer.module.css'

const NextTarget = () => {
  const { currentBoard, process: { currentIndex } } = useSelector((state: RootState) => state.game);

  const getNextTarget = () => {
    return currentBoard[currentIndex];
  }

  return (
    <div className={style.wrap}>
      Next target: {getNextTarget()}
    </div>
  );
};

export default NextTarget;

