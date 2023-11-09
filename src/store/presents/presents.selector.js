import { createSelector } from "reselect";

const selectPresentsReducer = (state) => state.presents;

export const selectPresents = createSelector(
    [selectPresentsReducer],
    (presentsSlice) => presentsSlice.presents
);