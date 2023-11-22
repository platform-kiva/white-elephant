import { GAME_ACTION_TYPES } from "./game.types"

export const setShuffleStatus = () => {
    return ({ type: GAME_ACTION_TYPES.SET_SHUFFLE_STATUS })
}

export const setStolenGiftTurnIndex = (index) => {
    return ({ type: GAME_ACTION_TYPES.SET_STOLEN_GIFT_TURN_INDEX, payload: index })
}

export const setTurnIndex = (index) => {
    return ({ type: GAME_ACTION_TYPES.SET_TURN_INDEX, payload: index })
}

export const setLastGiftStolen = (index) => {
    return ({ type: GAME_ACTION_TYPES.SET_LAST_GIFT_STOLEN, payload: index})
}

export const setGameHistory = (history, turnInfo) => {
    const updatedHistory = history.map(turn => turn)
    updatedHistory.push(turnInfo)
    return ({ type: GAME_ACTION_TYPES.SET_GAME_HISTORY, payload: updatedHistory})
}

export const setGameIsOver = () => {
    return ({ type: GAME_ACTION_TYPES.SET_GAME_IS_OVER })
}

export const setFirstPlayerReplayed = () => {
    return ({ type: GAME_ACTION_TYPES.SET_FIRST_PLAYER_REPLAYED })
}