import { createSelector } from "reselect";

const selectPlayersReducer = (state) => state.players;

export const selectPlayers = createSelector(
    [selectPlayersReducer],
    (playersSlice) => playersSlice.players
);