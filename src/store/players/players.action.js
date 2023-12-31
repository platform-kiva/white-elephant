import { PLAYERS_ACTION_TYPES } from "./players.types"

const swapPresentsHelper = (playersArray, thief, victim, thiefsPresent, victimsPresent) => {
  return playersArray.map(player => {
      if (player.id === thief) {
          const updatedHistory = player.presentHistory.map(present => present)
          updatedHistory.push(victimsPresent)
          return { ...player, presentHistory: updatedHistory}
      }
      if (player.id === victim) {
        const updatedHistory = player.presentHistory.map(present => present)
        updatedHistory.push(thiefsPresent)
        return { ...player, presentHistory: updatedHistory}
    }
      return player;
  });
};

export const swapPresents = (playersArray, thief, victim, thiefsPresent, victimsPresent) => {
  const swappedPresentsArray = swapPresentsHelper(playersArray, thief, victim, thiefsPresent, victimsPresent)
  return ({ type: PLAYERS_ACTION_TYPES.SWAP_PRESENTS, payload: swappedPresentsArray })
}

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex
  while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  const newArrayWithTurnInd = array.map((object, index) => {
      return { ...object, id: index };
  });

  return newArrayWithTurnInd;
}

export const shufflePlayers = (playersArray) => {
    const shuffledPlayersArray = shuffleArray(playersArray);
    return ({ type: PLAYERS_ACTION_TYPES.SHUFFLE_PLAYERS, payload: shuffledPlayersArray });
};

const removePresentHistoryHelper = (playersArray, playerID) => {
  return playersArray.map((player) => {
    if (player.id === playerID) {
      const updatedHistory = player.presentHistory.slice(0, -1)
      return { ...player, presentHistory: updatedHistory };
    }
    return player;
  });
}

export const removePresentHistory = (playersArray, playerID) => {
  const updatedArray = removePresentHistoryHelper(playersArray, playerID);
  return ({ type: PLAYERS_ACTION_TYPES.REMOVE_PRESENT_HISTORY, payload: updatedArray});
};

const addPresentHistoryHelper = (playersArray, playerID, presentID) => {
  return playersArray.map((player) => {
    if (player.id === playerID) {
      const updatedHistory = player.presentHistory.map(turn => turn)
      updatedHistory.push(presentID)
      return { ...player, presentHistory: updatedHistory };
    }
    return player;
  });
}

export const addPresentHistory = (playersArray, playerID, presentID) => {
  const updatedArray = addPresentHistoryHelper(playersArray, playerID, presentID);
  return ({ type: PLAYERS_ACTION_TYPES.ADD_PRESENT_HISTORY, payload: updatedArray});
};

export const resetPlayersState = () => {
  return ({ type: PLAYERS_ACTION_TYPES.RESET_PLAYERS_STATE })
}