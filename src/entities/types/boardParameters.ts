import { GameModeEnum } from "../enum/gameModeEnum";
import { SymbolTypeEnum } from "../enum/symbolTypeEnum";

export type BoardParameters = {
    size: number,
    symbolType: SymbolTypeEnum,
    isInverted: boolean,
    mode: GameModeEnum
}