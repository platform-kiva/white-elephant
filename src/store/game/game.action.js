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

export const addGameHistory = (history, turnInfo, turn2Info = null) => {
    const updatedHistory = history.map(turn => turn)
    updatedHistory.push(turnInfo)
    if (turn2Info) {
        updatedHistory.push(turn2Info)
    }
    return ({ type: GAME_ACTION_TYPES.ADD_GAME_HISTORY, payload: updatedHistory})
}

export const removeGameHistory = (history) => {
    const updatedHistory = history.slice(0, -1)
    return ({ type: GAME_ACTION_TYPES.REMOVE_GAME_HISTORY, payload: updatedHistory })
}

export const setGameIsOver = () => {
    return ({ type: GAME_ACTION_TYPES.SET_GAME_IS_OVER })
}

export const setFirstPlayerReplayed = () => {
    return ({ type: GAME_ACTION_TYPES.SET_FIRST_PLAYER_REPLAYED })
}

export const resetGameState = () => {
    return ({ type: GAME_ACTION_TYPES.RESET_GAME_STATE })
}