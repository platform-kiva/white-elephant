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
    (gameSlice) => gameSlice.lastGiftStolen
)

export const selectGameHistory = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.gameHistory
)
export const selectGameIsOver = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.gameIsOver
)
export const selectGameIsStarted = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.gameIsStarted
)
export const selectFirstPlayerReplayed = createSelector(
    [selectGameReducer],
    (gameSlice) => gameSlice.firstPlayerReplayed
)