import { createSelector } from "reselect";

const selectGameReducer = (state) => state.game;

export const selectTurnIndex = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.turnIndex
);