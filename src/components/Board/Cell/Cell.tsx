
import { memo, useState } from 'react';
import cx from 'classnames';
import style from './Cell.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxSlices/store';

type CellProps = {
  value: string | number,
  position: number,
  onClick?: (value: string | number) => boolean
}

const Cell = ({ value, position, onClick }: CellProps) => {
  const boardSize = useSelector((state: RootState) => state.gameParameters.boardSize);
  const [isPassed, setPassed] = useState(false);
  const onClickCell = () => {
    if (onClick && onClick(value)) {
      setPassed(true);
    }
  }

  return <>
    <div onClick={onClickCell} className={cx([style.cell, isPassed && style.passedCell])}>{value}</div>
    {(position) % boardSize === 0 && <div className={style.break}></div>}
  </>
};
export default memo(Cell);

