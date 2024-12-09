import { GAME_ACTION_TYPES } from "./game.types";

export const GAME_INITIAL_STATE = {
    firstPlayerReplayed: false,
    gameHistory: [],
    gameIsOver: false,
    gameIsStarted: false,
    lastGiftStolen: null,
    shuffleStatus: false,
    stolenGiftTurnIndex: null,
    systemNotification: null,
    turnIndex: 0,
};

export const gameReducer = (state = GAME_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GAME_ACTION_TYPES.RESET_GAME_STATE:
            return {
                ...state,
                turnIndex: 0,
                stolenGiftTurnIndex: null,
                lastGiftStolen: null,
                shuffleStatus: false,
                gameHistory: [],
                gameIsOver: false,
                gameIsStarted: false,
                firstPlayerReplayed: false
            }
        case GAME_ACTION_TYPES.SET_FIRST_PLAYER_REPLAYED:
            return { ...state, firstPlayerReplayed: payload }
        case GAME_ACTION_TYPES.SET_GAME_HISTORY:
            return { ...state, gameHistory: payload }
        case GAME_ACTION_TYPES.SET_GAME_IS_STARTED:
            return { ...state, gameIsStarted: payload }
        case GAME_ACTION_TYPES.SET_GAME_IS_OVER:
            return { ...state, gameIsOver: true }
        case GAME_ACTION_TYPES.SET_LAST_GIFT_STOLEN:
            return { ...state, lastGiftStolen: payload }
        case GAME_ACTION_TYPES.SET_SHUFFLE_STATUS:
            return { ...state, shuffleStatus: payload };
        case GAME_ACTION_TYPES.SET_STOLEN_GIFT_TURN_INDEX:
            return { ...state, stolenGiftTurnIndex: payload }
        case GAME_ACTION_TYPES.SET_SYSTEM_NOTIFICATION:
            return { ...state, systemNotification: payload };
        case GAME_ACTION_TYPES.SET_TURN_INDEX:
            return { ...state, turnIndex: payload }
        default:
            return state;
    }
};