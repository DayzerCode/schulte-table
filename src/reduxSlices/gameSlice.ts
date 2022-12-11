import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameModeEnum } from '../entities/enum/gameModeEnum'
import { SymbolTypeEnum } from '../entities/enum/symbolTypeEnum'
import { BoardParameters } from '../entities/types/boardParameters'

export type GameState = {
    parameters: BoardParameters,
    process: {
        currentIndex: number,
        isPause: boolean
    }
    currentBoard: string[] | number[],
}

const defaultProcess = {
    currentIndex: 0,
    isPause: false
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
            // Reset game process
            state.currentBoard = [];
            state.process = defaultProcess;
        },
        initCurrentBoard: (state, action: PayloadAction<string[] | number[]>) => {
            state.currentBoard = action.payload;
        },
        nextIndex: (state) => {
            state.process.currentIndex++;
        },
        setGamePause: (state, action: PayloadAction<boolean>) => {
            state.process.isPause = action.payload;
        },
    },
})

export const { initParameters, initCurrentBoard, nextIndex, setGamePause } = gameParametersSlice.actions

export default gameParametersSlice.reducer