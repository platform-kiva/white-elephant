import { GAME_ACTION_TYPES } from "./game.types"

export const setShuffleStatus = (status) => {
    return ({ type: GAME_ACTION_TYPES.SET_SHUFFLE_STATUS, payload: status })
};
export const setStolenGiftTurnIndex = (index) => {
    return ({ type: GAME_ACTION_TYPES.SET_STOLEN_GIFT_TURN_INDEX, payload: index })
};
export const setTurnIndex = (index) => {
    return ({ type: GAME_ACTION_TYPES.SET_TURN_INDEX, payload: index })
};
export const setLastGiftStolen = (index) => {
    return ({ type: GAME_ACTION_TYPES.SET_LAST_GIFT_STOLEN, payload: index })
};
export const addGameHistory = (history, turnInfo, turn2Info = null) => {
    const updatedHistory = history.map(turn => turn)
    updatedHistory.push(turnInfo)
    if (turn2Info) {
        updatedHistory.push(turn2Info)
    }
    return ({ type: GAME_ACTION_TYPES.SET_GAME_HISTORY, payload: updatedHistory })
};
export const removeGameHistory = (history) => {
    const updatedHistory = history.slice(0, -1)
    return ({ type: GAME_ACTION_TYPES.SET_GAME_HISTORY, payload: updatedHistory })
};
export const setGameIsStarted = (status) => {
    return ({ type: GAME_ACTION_TYPES.SET_GAME_IS_STARTED, payload: status })
};
export const setGameIsOver = () => {
    return ({ type: GAME_ACTION_TYPES.SET_GAME_IS_OVER })
};
export const setFirstPlayerReplayed = (val) => {
    return ({ type: GAME_ACTION_TYPES.SET_FIRST_PLAYER_REPLAYED, payload: val })
};
export const resetGameState = () => {
    return ({ type: GAME_ACTION_TYPES.RESET_GAME_STATE })
};
export const setSystemNotification = (notificationData) => {
    return ({ type: GAME_ACTION_TYPES.SET_SYSTEM_NOTIFICATION, payload: notificationData });
};
export const setBackgroundColor = (val) => {
    return ({ type: GAME_ACTION_TYPES.SET_BG_COLOR, payload: val });
}