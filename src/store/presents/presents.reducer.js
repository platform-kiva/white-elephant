import { PRESENTS_ACTION_TYPES } from "./presents.types";
import { PRESENT_DATA } from '../../data/present_data';

export const PRESENTS_INITIAL_STATE = {
    presents: PRESENT_DATA
};

export const presentsReducer = (state = PRESENTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        default:
            return state;
    }
};