import { memo, useState } from 'react';
import cx from 'classnames';
import style from './Cell.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxSlices/store';
import { GameModeEnum } from '../../../entities/enum/gameModeEnum';

type CellProps = {
  value: string | number,
  position: number,
  onClick?: (value: string | number) => boolean
}

const Cell = ({ value, position, onClick }: CellProps) => {
  const { parameters: { size, mode }, process: { isPause: isGamePause } } = useSelector((state: RootState) => state.game);
  const [isPassed, setPassed] = useState(false);
  const onClickCell = () => {
    if (onClick && onClick(value)) {
      setPassed(true);
    }
  }

  const isPassedCell = (): boolean => {
    return isPassed && mode === GameModeEnum.EASY;
  }

  return <>
    <div onClick={onClickCell} className={cx([style.cell, isPassedCell() && style.passedCell])}>{isGamePause ? '?' : value}</div>
    {(position) % size === 0 && <div className={style.break}></div>}
  </>
};

export default memo(Cell);

