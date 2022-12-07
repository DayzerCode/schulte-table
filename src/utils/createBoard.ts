import { TypeTableEnum } from "../entities/enum/typeTableEnum";
import { BoardSettings } from "../entities/types/boardSettings";

export const createBoard = ({ boardSize, type, isInverted }: BoardSettings) => {
    const count = Math.pow(boardSize, 2);
    let result: string[] | number[];
    switch (type) {
        case TypeTableEnum.NUMBERS:
            result = createBoardNumbers(count);
            break;
        case TypeTableEnum.ENGLISH_LETTERS:
            result = createBoardLetters(count, 'abcdefghijklmnopqrstuvwxyz');
            break;
        default:
            result = createBoardNumbers(count);
            break;
    }

    if (isInverted) {
        result.reverse();
    }

    return result;
}

const createBoardNumbers = (count: number) => {
    return Array.from({ length: count }, (_, i) => i + 1);
}

const createBoardLetters = (count: number, strLetters: string) => {
    if (count > strLetters.length) {
        throw Error(`Count cannot be bigger than strLetters`);
    }
    strLetters = strLetters.slice(0, count);
    return Array.from(strLetters);
}