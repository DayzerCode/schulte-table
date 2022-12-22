import "@testing-library/react";
import { GameModeEnum } from "../../entities/enum/gameModeEnum";
import { SymbolTypeEnum } from "../../entities/enum/symbolTypeEnum";
import gameSlice, { gameInitialState, initCurrentBoard, initParameters, nextIndex, setGamePause } from "./gameSlice";

describe('gameSlice reducers', () => {
    test('initParameters', () => {
        const parameters = {
            size: 5,
            symbolType: SymbolTypeEnum.NUMBERS,
            isInverted: true,
            mode: GameModeEnum.NORMAL
        };
        expect(gameSlice(gameInitialState, initParameters(parameters))).toEqual({ ...gameInitialState, ...{ parameters } });
    });

    test('initCurrentBoard', () => {
        const board = [1, 2, 3, 4];
        const slice = gameSlice(gameInitialState, initCurrentBoard(board));
        expect(slice.currentBoard).toEqual(board);
        expect(slice.process.numberGame).toBe(1);
    });

    test('nextIndex', () => {
        const board = [1];
        const slice = gameSlice({ ...gameInitialState, currentBoard: board }, nextIndex());
        expect(slice.process.currentIndex).toBe(1);
        expect(slice.process.isWin).toBe(true);
    });

    test('setGamePause', () => {
        const slice = gameSlice(gameInitialState, setGamePause(true));
        expect(slice.process.isPause).toBe(true);
    });
});