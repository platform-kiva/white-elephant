import { PLAYERS_ACTION_TYPES } from "./players.types";

export const PLAYERS_INITIAL_STATE = {
    playerData: []
};

export const playersReducer = (state = PLAYERS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case PLAYERS_ACTION_TYPES.SET_PLAYERS:
            return { ...state, playerData: payload };
        default:
            return state;
    }
};