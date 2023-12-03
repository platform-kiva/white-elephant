import { PLAYERS_ACTION_TYPES } from "./players.types";
import { PLAYER_DATA } from '../../data/player_data';

export const PLAYERS_INITIAL_STATE = {
    players: PLAYER_DATA
};

export const playersReducer = (state = PLAYERS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case PLAYERS_ACTION_TYPES.SHUFFLE_PLAYERS:
            return { ...state, players: payload };
        case PLAYERS_ACTION_TYPES.ADD_PRESENT_HISTORY:
            return { ...state, players: payload };
        case PLAYERS_ACTION_TYPES.REMOVE_PRESENT_HISTORY:
            return { ...state, players: payload };
        case PLAYERS_ACTION_TYPES.SWAP_PRESENTS:
            return { ...state, players: payload};
        default:
            return state;
    }
};
