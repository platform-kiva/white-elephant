import { combineReducers } from "redux"

// sub-reducers
import { gameReducer } from "./game/game.reducer";
import { playersReducer } from "./players/players.reducer";
import { presentsReducer } from "./presents/presents.reducer";

export const rootReducer = combineReducers({
    game: gameReducer,
    players: playersReducer,
    presents: presentsReducer
})