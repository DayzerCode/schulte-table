import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameModeEnum } from '../entities/enum/gameModeEnum'

export type GameParametersState = {
    boardSize: number,
    currentBoard: string[] | number[],
    mode: GameModeEnum,
    currentIndex: number
}

const initialState: GameParametersState = {
    boardSize: 3,
    currentBoard: [],
    mode: GameModeEnum.EASY,
    currentIndex: 0
}

export const gameParametersSlice = createSlice({
    name: 'gameParameters',
    initialState,
    reducers: {
        initState: (state, action: PayloadAction<Pick<GameParametersState, 'currentBoard' | 'boardSize' | 'mode'>>) => {
            state.currentBoard = action.payload.currentBoard;
            state.boardSize = action.payload.boardSize;
            state.mode = action.payload.mode;
        },
        nextIndex: (state) => {
            state.currentIndex++;
        },
    },
})

export const { initState, nextIndex } = gameParametersSlice.actions

export default gameParametersSlice.reducer