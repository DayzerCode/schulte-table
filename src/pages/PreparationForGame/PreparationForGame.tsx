import { useEffect, useState } from "react";
import GroupButtons from "../../components/Common/GroupButtons/GroupButtons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GameModeEnum } from "../../entities/enum/gameModeEnum";
import { SymbolTypeEnum } from "../../entities/enum/symbolTypeEnum";
import { symbolTypeVariants } from "./variants/symbolTypeVariants";
import { modeVariants } from "./variants/modeVariants";
import { Parameter } from "../../entities/types/parameterType";
import { BoardParameters } from "../../entities/types/boardParameters";
import { orderVariants } from "./variants/orderVariants";
import { boardSizeVariantsForLetters, boardSizeVariantsForNumbers } from "./variants/boardSizeVariants";
import { GameParameter } from "../../entities/types/gameParameter";
import { initParameters } from "../../reduxSlices/gameSlice/gameSlice";

import style from "./PreparationForGame.module.css";

const PreparationForGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [parameters, setParameters] = useState<BoardParameters>({
    symbolType: SymbolTypeEnum.NUMBERS,
    size: 3,
    mode: GameModeEnum.EASY,
    isInverted: false
  });

  const [boardSizeVariants, setBoardSizeVariants] = useState<GameParameter[]>(boardSizeVariantsForNumbers);

  useEffect(() => {
    if (parameters?.symbolType === SymbolTypeEnum.ENGLISH_LETTERS) {
      updateParameter('size', 3);
    }
    setBoardSizeVariants(parameters?.symbolType === SymbolTypeEnum.ENGLISH_LETTERS ? boardSizeVariantsForLetters : boardSizeVariantsForNumbers);
  }, [parameters?.symbolType]);

  const updateParameter = (nameGroup: string, value: Parameter) => {
    setParameters((prev: any) => {
      return {
        ...prev, [nameGroup]: value
      }
    });
  }

  const start = () => {
    dispatch(initParameters(parameters))
    navigate('/game');
  }

  return (
    <div className={style.wrap}>
      <h1>Preparation For Game</h1>
      <GroupButtons
        nameGroup="Symbols on board"
        keyGroup="symbolType"
        currentValue={parameters.symbolType}
        updateParameter={updateParameter}
        variants={symbolTypeVariants}
      />
      <GroupButtons
        nameGroup="Size board"
        keyGroup="size"
        currentValue={parameters.size}
        updateParameter={updateParameter}
        variants={boardSizeVariants}
      />
      <GroupButtons
        nameGroup="Complexity"
        keyGroup="mode"
        currentValue={parameters.mode}
        updateParameter={updateParameter}
        variants={modeVariants}
      />
      <GroupButtons
        nameGroup="Symbol order"
        keyGroup="isInverted"
        currentValue={parameters.isInverted}
        updateParameter={updateParameter}
        variants={orderVariants}
      />
      <button className="btn-primary" onClick={start}>Start</button>
    </div >
  );
}

export default PreparationForGame; 
