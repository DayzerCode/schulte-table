import { gameInitialState } from "../reduxSlices/gameSlice/gameSlice";

export function addToReduxInitialState<T>(key: string, intitalState: T) {
    switch (key) {
        case 'game':
            return { game: { ...gameInitialState, ...intitalState } }
    }
}