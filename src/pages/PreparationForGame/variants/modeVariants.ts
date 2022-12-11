import { GameModeEnum } from "../../../entities/enum/gameModeEnum";
import { GameParameter } from "../../../entities/types/gameParameter";

export const modeVariants: GameParameter[] = [
    {
        name: 'Easy',
        value: GameModeEnum.EASY,
    },
    {
        name: 'Standart',
        value: GameModeEnum.NORMAL,
    }
];