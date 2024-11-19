import { createSelector } from "reselect";

const selectPresentsReducer = (state) => state.presents;

export const selectPresentData = createSelector(
    [selectPresentsReducer],
    (presentsSlice) => presentsSlice.presentData
)