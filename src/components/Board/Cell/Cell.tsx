import { memo, useState } from 'react';
import cx from 'classnames';
import { GameModeEnum } from '../../../entities/enum/gameModeEnum';

import style from './Cell.module.css';

type CellProps = {
  value: string | number,
  position: number,
  onClick?: (value: string | number) => boolean,
  mode: GameModeEnum,
  size: number,
  isWin?: boolean
}

const Cell = ({ value, position, onClick, mode, size, isWin }: CellProps) => {
  const [isPassed, setPassed] = useState<boolean>(false);

  const onClickCell = () => {
    if (onClick && onClick(value)) {
      setPassed(true);
    }
  }

  const getClasses = (): string[] => {
    const styles = [style.cell];
    if (isWin) {
      styles.push(style.completedCell);
    } else if (isPassed && mode === GameModeEnum.EASY) {
      styles.push(style.passedCell);
    }
    return styles;
  }

  return <>
    <div data-testid="cell-btn" onClick={onClickCell} className={cx(getClasses())}>{value}</div>
    {(position) % size === 0 && <div className={style.break}></div>}
  </>
};

export default memo(Cell);

