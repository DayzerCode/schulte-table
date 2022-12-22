import { useSelector } from 'react-redux';
import { RootState } from "../../reduxSlices/store";

import style from './Timer.module.css'

const NextTarget = () => {
  const { currentBoard, process: { currentIndex, isWin } } = useSelector((state: RootState) => state.game);

  const getNextTarget = () => {
    return currentBoard[currentIndex];
  }

  return (
    <div className={style.wrap}>
      {isWin ?
        <span data-testid="win-label">Congratulations. You win!</span> :
        <>Next target: <span data-testid="next-target">{getNextTarget()}</span></>}
    </div>
  );
};

export default NextTarget;

