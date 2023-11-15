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