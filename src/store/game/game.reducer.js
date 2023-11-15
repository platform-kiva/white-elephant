import { GAME_ACTION_TYPES } from "./game.types";

export const GAME_INITIAL_STATE = {
    turnIndex: 0,
    stolenGiftTurnIndex: null,
    lastGiftStolen: null,
    shuffleStatus: false
};

export const gameReducer = (state = GAME_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case GAME_ACTION_TYPES.SET_SHUFFLE_STATUS:
            return { ...state, shuffleStatus: true };
        case GAME_ACTION_TYPES.SET_STOLEN_GIFT_TURN_INDEX:
            return { ...state, stolenGiftTurnIndex: payload }
        case GAME_ACTION_TYPES.SET_TURN_INDEX:
            return { ...state, turnIndex: payload }
        case GAME_ACTION_TYPES.SET_LAST_GIFT_STOLEN:
            return { ...state, lastGiftStolen: payload }
        default:
            return state;
    }
};