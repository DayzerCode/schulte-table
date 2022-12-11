import { SymbolTypeEnum } from "../../../entities/enum/symbolTypeEnum";
import { GameParameter } from "../../../entities/types/gameParameter";

export const symbolTypeVariants: GameParameter[] = [
    {
        name: 'Numbers',
        value: SymbolTypeEnum.NUMBERS,
    },
    {
        name: 'Letters',
        value: SymbolTypeEnum.ENGLISH_LETTERS,
    }
];