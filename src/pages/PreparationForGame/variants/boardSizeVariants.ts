import { GameParameter } from "../../../entities/types/gameParameter";

export const boardSizeVariantsForLetters: GameParameter[] = [
    {
        name: '3x3',
        value: 3,
    },
    {
        name: '4x4',
        value: 4,
    },
    {
        name: '5x5',
        value: 5,
    }
];

export const boardSizeVariantsForNumbers: GameParameter[] = [
    ...boardSizeVariantsForLetters,
    {
        name: '6x6',
        value: 6,
    },
    {
        name: '7x7',
        value: 7,
    },
]