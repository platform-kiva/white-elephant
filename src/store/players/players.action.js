import { PLAYERS_ACTION_TYPES } from "./players.types";

const swapPresentsHelper = (playersArray, thief, victim, thiefsPresent, victimsPresent) => {
  return playersArray.map(player => {
    if (player.id === thief) {
      const updatedHistory = player.presentHistory.map(present => present)
      updatedHistory.push(victimsPresent)
      return { ...player, presentHistory: updatedHistory }
    }
    if (player.id === victim) {
      const updatedHistory = player.presentHistory.map(present => present)
      updatedHistory.push(thiefsPresent)
      return { ...player, presentHistory: updatedHistory }
    }
    return player;
  });
};

export const swapPresents = (playersArray, thief, victim, thiefsPresent, victimsPresent) => {
  const swappedPresentsArray = swapPresentsHelper(playersArray, thief, victim, thiefsPresent, victimsPresent)
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: swappedPresentsArray })
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
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: shuffledPlayersArray });
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
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: updatedArray });
};

const addPresentHistoryHelper = (playersArray, player1Id, player2Id, present1Id, present2Id) => {
  if (player2Id === null) {
    alert("move = Open");
    return playersArray.map((player) => {
      if (player.id === player1Id) {
        const updatedHistory = player.presentHistory.map(present => present)
        updatedHistory.push(present1Id)
        return { ...player, presentHistory: updatedHistory };
      }
      return player;
    });
  } else {
    alert("move = Steal");
    if (present2Id === null) {
      alert("move = Steal without swapping");
      return playersArray.map((player) => {
        if (player.id === player2Id) {
          const updatedHistory = player.presentHistory.map(present => present)
          updatedHistory.push(null)
          return { ...player, presentHistory: updatedHistory };
        }
        return player;
      });
    } else {
      alert("move = Steal with swapping")
      return playersArray.map((player) => {
        if (player.id === player2Id) {
          const updatedHistory = player.presentHistory.map(present => present);
          updatedHistory.push(present1Id);
          return { ...player, presentHistory: updatedHistory };
        } else {
          if (player.id === player1Id) {
            const updatedHistory = player.presentHistory.map(present => present);
            updatedHistory.push(present2Id);
            return { ...player, presentHistory: updatedHistory };
          }
        }
        return player;
      });
    }
  }
}

export const addPresentHistory = (playersArray, moveData) => {
  const { player1Id, player2Id, present1Id, present2Id } = moveData;
  const updatedArray = addPresentHistoryHelper(playersArray, player1Id, player2Id, present1Id, present2Id);
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: updatedArray });
};

export const resetPlayersState = () => {
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: [] })
}

export const addPlayer = (playerData, player) => {
  const playerObject = {
    name: player,
    id: null,
    presentHistory: []
  };

  const newPlayerDataArray = [...playerData, playerObject]
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: newPlayerDataArray });
}

export const removePlayer = (playerData, index) => {
  const newPlayerDataArray = playerData.filter((_, i) => i !== index);
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: newPlayerDataArray });
}

export const clearPlayers = () => {
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: [] });
}

export const resetPlayerHistory = (playerData) => {
  const resetPlayerData = playerData.map(player => ({
    ...player,
    presentHistory: []
  }))
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: resetPlayerData });
}