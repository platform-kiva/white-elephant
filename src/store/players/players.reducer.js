import { PLAYERS_ACTION_TYPES } from "./players.types";

export const PLAYERS_INITIAL_STATE = {
    playerData: []
};

export const playersReducer = (state = PLAYERS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case PLAYERS_ACTION_TYPES.SHUFFLE_PLAYERS:
            return { ...state, playerData: payload };
        case PLAYERS_ACTION_TYPES.ADD_PRESENT_HISTORY:
            return { ...state, playerData: payload };
        case PLAYERS_ACTION_TYPES.REMOVE_PRESENT_HISTORY:
            return { ...state, playerData: payload };
        case PLAYERS_ACTION_TYPES.SWAP_PRESENTS:
            return { ...state, playerData: payload };
        case PLAYERS_ACTION_TYPES.RESET_PLAYERS_STATE:
            return { ...state, playerData: [] };
        case PLAYERS_ACTION_TYPES.SET_PLAYERS:
            return { ...state, playerData: payload };
        default:
            return state;
    }
};