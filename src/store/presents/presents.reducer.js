import { PRESENTS_ACTION_TYPES } from "./presents.types";

export const PRESENTS_INITIAL_STATE = {
    cardImgsUploaded: false,
    presentData: []
};

export const presentsReducer = (state = PRESENTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case PRESENTS_ACTION_TYPES.SET_CARD_IMGS_UPLOADED:
            return { ...state, cardImgsUploaded: payload }
        case PRESENTS_ACTION_TYPES.SET_PRESENTS:
            return { ...state, presentData: payload }
        default:
            return state;
    }
};