import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setGamePause } from "../../reduxSlices/gameParametersSlice";

import style from './Timer.module.css'

const SECOND = 1000;
const Timer = () => {
  const dispatch = useDispatch();
  const [passedSeconds, setPassedSeconds] = useState<number>(0);
  const [isPause, setPause] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setGamePause(isPause));

    let timerId: number | null = null;
    if (!isPause) {
      timerId = window.setInterval(() => {
        setPassedSeconds(prev => prev + 1);
      }, SECOND);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    }
  }, [isPause]);

  const buttonLabel = () => {
    return !isPause ? 'Pause' : 'Continue';
  }

  const switchPause = () => {
    return setPause(prev => !prev);
  }

  return (
    <div className={style.wrap}>
      <div>
        <div>Past time: {passedSeconds} </div>
        <div>
          <button className="btn-primary" onClick={switchPause}>{buttonLabel()}</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

