import cx from 'classnames';
import { GameParameter } from '../../../entities/types/gameParameter';
import { Parameter } from '../../../entities/types/parameterType';

import style from "./GroupButtons.module.css";

type SelectButtonsProps = {
  nameGroup?: string,
  keyGroup: string,
  currentValue: Parameter,
  updateParameter: (nameGroup: string, value: string | number | boolean) => void,
  variants: GameParameter[]
}

const GroupButtons = ({ keyGroup, currentValue, nameGroup, updateParameter, variants }: SelectButtonsProps) => {
  return (
    <div className={style.block}>
      {nameGroup && <p className={style.header}>{nameGroup}</p>}
      <div className={style.buttons}>
        {variants.map(({ name, value }) =>
          <button
            key={name}
            onClick={() => updateParameter(keyGroup, value)}
            className={cx([style.btn, currentValue === value && style.active])}
            data-testid="btn"
          >
            {name}
          </button>)}
      </div>
    </div>
  );
}

export default GroupButtons; 
