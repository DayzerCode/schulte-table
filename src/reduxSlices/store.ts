import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameSlice/gameSlice'

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: combineReducers({
            game: gameReducer
        }),
        preloadedState: initialState
    });
}

export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch