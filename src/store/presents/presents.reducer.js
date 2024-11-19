import { PRESENTS_ACTION_TYPES } from "./presents.types";

export const PRESENTS_INITIAL_STATE = {
    presentData: [],
    cardImgsUploaded: false
};

export const presentsReducer = (state = PRESENTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case PRESENTS_ACTION_TYPES.SWAP_OWNERS:
            return { ...state, presentData: payload };
        case PRESENTS_ACTION_TYPES.ADD_OWNER_HISTORY:
            return { ...state, presentData: payload };
        case PRESENTS_ACTION_TYPES.REMOVE_OWNER_HISTORY:
            return { ...state, presentData: payload };
        case PRESENTS_ACTION_TYPES.RESET_PRESENTS_STATE:
            return { ...state, presentData: [] }
        case PRESENTS_ACTION_TYPES.SET_PRESENTS:
            return { ...state, presentData: payload }
        case PRESENTS_ACTION_TYPES.SET_CARD_IMGS_UPLOADED:
            return { ...state, cardImgsUploaded: payload }
        default:
            return state;
    }
};