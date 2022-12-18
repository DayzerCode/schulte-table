import { memo } from 'react';
import cx from 'classnames';
import { GameModeEnum } from '../../../entities/enum/gameModeEnum';

import style from './Cell.module.css';

type CellProps = {
  value: string | number,
  position: number,
  onClick?: (value: string | number) => boolean,
  mode: GameModeEnum,
  size: number,
  isPassed: boolean,
}

const Cell = ({ value, position, onClick, mode, size, isPassed = false }: CellProps) => {
  const onClickCell = () => {
    if (onClick) {
      onClick(value)
    }
  }

  const isPassedCell = (): boolean => {
    return isPassed && mode === GameModeEnum.EASY;
  }

  return <>
    <div onClick={onClickCell} className={cx([style.cell, isPassedCell() && style.passedCell])}>{value}</div>
    {(position) % size === 0 && <div className={style.break}></div>}
  </>
};

export default memo(Cell);

