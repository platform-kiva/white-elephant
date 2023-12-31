import { PRESENTS_ACTION_TYPES } from "./presents.types";
import { PRESENT_DATA } from '../../data/present_data';

export const PRESENTS_INITIAL_STATE = {
    presents: PRESENT_DATA
};

export const presentsReducer = (state = PRESENTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case PRESENTS_ACTION_TYPES.SWAP_OWNERS:
            return { ...state, presents: payload };
        case PRESENTS_ACTION_TYPES.ADD_OWNER_HISTORY:
            return { ...state, presents: payload };
        case PRESENTS_ACTION_TYPES.REMOVE_OWNER_HISTORY:
            return { ...state, presents: payload };
        case PRESENTS_ACTION_TYPES.RESET_PRESENTS_STATE:
            return { presents: PRESENT_DATA }
        default:
            return state;
    }
};