import { configureStore } from '@reduxjs/toolkit'
import gameParametersReducer from './gameParametersSlice'

export const store = configureStore({
    reducer: {
        gameParameters: gameParametersReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch