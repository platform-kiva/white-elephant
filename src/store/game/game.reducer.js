import { GAME_ACTION_TYPES } from "./game.types";

export const GAME_INITIAL_STATE = {
    turnIndex: 0
};

export const gameReducer = (state = GAME_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        default:
            return state;
    }
};