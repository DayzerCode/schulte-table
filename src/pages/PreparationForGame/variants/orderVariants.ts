import { GameParameter } from "../../../entities/types/gameParameter";

// value for parameter - isInverted
export const orderVariants: GameParameter[] = [
    {
        name: 'Standard order',
        value: false,
    },
    {
        name: 'Reverse order',
        value: true,
    }
];