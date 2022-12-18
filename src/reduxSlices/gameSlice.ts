import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameModeEnum } from '../entities/enum/gameModeEnum'
import { SymbolTypeEnum } from '../entities/enum/symbolTypeEnum'
import { BoardParameters } from '../entities/types/boardParameters'

export type GameState = {
    parameters: BoardParameters,
    process: {
        currentIndex: number,
        isPause: boolean,
        isWin: boolean
    }
    currentBoard: string[] | number[],
}

const defaultProcess = {
    currentIndex: 0,
    isPause: false,
    isWin: false
}

const initialState: GameState = {
    parameters: {
        size: 3,
        isInverted: false,
        symbolType: SymbolTypeEnum.NUMBERS,
        mode: GameModeEnum.EASY
    },
    process: defaultProcess,
    currentBoard: [],
}

export const gameParametersSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        initParameters: (state, action: PayloadAction<BoardParameters>) => {
            state.parameters = action.payload;
            state.currentBoard = [];
        },
        initCurrentBoard: (state, action: PayloadAction<string[] | number[]>) => {
            state.currentBoard = action.payload;
            // Reset game process
            state.process = defaultProcess;
        },
        nextIndex: (state) => {
            state.process.currentIndex++;
            if (state.process.currentIndex === state.currentBoard.length) {
                state.process.isWin = true;
            }
        },
        setGamePause: (state, action: PayloadAction<boolean>) => {
            state.process.isPause = action.payload;
        },
    },
})

export const { initParameters, initCurrentBoard, nextIndex, setGamePause } = gameParametersSlice.actions

export default gameParametersSlice.reducer