import { SymbolTypeEnum } from "../../entities/enum/symbolTypeEnum";
import { BoardParameters } from "../../entities/types/boardParameters";

export const createBoard = ({ size, symbolType, isInverted }: Omit<BoardParameters, 'mode'>) => {
    const count = Math.pow(size, 2);
    let result: string[] | number[];
    switch (symbolType) {
        case SymbolTypeEnum.NUMBERS:
            result = createBoardNumbers(count);
            break;
        case SymbolTypeEnum.ENGLISH_LETTERS:
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