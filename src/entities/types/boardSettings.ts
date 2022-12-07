import { TypeTableEnum } from "../enum/typeTableEnum";

export type BoardSettings = {
    boardSize: number,
    type: TypeTableEnum,
    isInverted: boolean,
}