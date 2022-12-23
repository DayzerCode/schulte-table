import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setGamePause } from "../../reduxSlices/gameSlice/gameSlice";
import { RootState } from "../../reduxSlices/store";
import { formatSeconds } from "../../utils/formatSeconds/formatSeconds";

import style from './Timer.module.css'

export const TIMER_INTERVAL = 1000;
const Timer = () => {
  const dispatch = useDispatch();
  const [passedSeconds, setPassedSeconds] = useState<number>(0);
  const [isPause, setPause] = useState<boolean>(false);
  const { currentBoard, process: { isWin } } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(setGamePause(isPause));

    let timerId: number | null = null;
    if (!isPause && !isWin) {
      timerId = window.setInterval(() => {
        setPassedSeconds(prev => prev + 1);
      }, TIMER_INTERVAL);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    }
  }, [isPause, isWin]);

  useEffect(() => {
    setPassedSeconds(0);
  }, [currentBoard]);

  const buttonLabel = () => {
    return !isPause ? 'Pause' : 'Continue';
  }

  const switchPause = () => {
    return setPause(prev => !prev);
  }

  return (
    <div className={style.wrap}>
      <div>
        <div>Past time: <span data-testid="passed-time">{formatSeconds(passedSeconds)}</span></div>
        {!isWin &&
          <div>
            <button className="btn-primary" onClick={switchPause} data-testid="switch-pause">{buttonLabel()}</button>
          </div>}
      </div>
    </div>
  );
};

export default Timer;

