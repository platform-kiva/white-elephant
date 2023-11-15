import { createSelector } from "reselect";

const selectGameReducer = (state) => state.game;

export const selectTurnIndex = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.turnIndex
);

export const selectShuffleStatus = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.shuffleStatus
)

export const selectStolenGiftTurnIndex = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.stolenGiftTurnIndex
)

export const selectLastGiftStolen = createSelector(
    [selectGameReducer],
    (gameSlice => gameSlice.lastGiftStolen)
)