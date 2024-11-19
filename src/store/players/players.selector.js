import { createSelector } from "reselect";

const selectPlayersReducer = (state) => state.players;

export const selectPlayerData = createSelector(
    [selectPlayersReducer],
    (playersSlice) => playersSlice.playerData
);