import { GAME_ACTION_TYPES } from "./game.types";

export const GAME_INITIAL_STATE = {
    turnIndex: 0,
    stolenGiftTurnIndex: null,
    lastGiftStolen: null,
    shuffleStatus: false,
    gameHistory: [],
    gameIsOver: false,
    firstPlayerReplayed: false
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
        case GAME_ACTION_TYPES.SET_GAME_HISTORY:
            return { ...state, gameHistory: payload }
        case GAME_ACTION_TYPES.SET_GAME_IS_OVER:
            return { ...state, gameIsOver: true}
        case GAME_ACTION_TYPES.SET_FIRST_PLAYER_REPLAYED:
            return { ...state, firstPlayerReplayed: true}
        default:
            return state;
    }
};