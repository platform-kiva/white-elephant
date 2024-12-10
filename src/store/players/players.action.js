import { PLAYERS_ACTION_TYPES } from "./players.types";

const swapPresentsHelper = (playersArray, thief, victim, thiefsPresent, victimsPresent) => {
  return playersArray.map(player => {
    if (player.id === thief) {
      const newPresentArray = player.present;
      newPresentArray.push(victimsPresent);
      return { ...player, present: newPresentArray }
    }
    if (player.id === victim) {
      const newPresentArray = player.present;
      newPresentArray.push(thiefsPresent);
      return { ...player, present: newPresentArray }
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

const removePresentHistoryHelper = (playerData, previousMoveData) => {
  const { player1Id, player2Id, present1Id, type } = previousMoveData;

  if (type === "open") {
    return playerData.map((player) => {
      if (player.id === player1Id) {
        const newPresentArray = player.present;
        newPresentArray.pop();
        return {
          ...player,
          present: newPresentArray, // Set present to null
        };
      }
      return player; // Return the unchanged player for other cases
    });
  } else if (type === "steal") {
    if (present1Id === null) {
      // Undo no-swap steal
      return playerData.map((player) => {
        if (player.id === player1Id || player.id === player2Id) {
          const newPresentArray = player.present;
          newPresentArray.pop();
          return {
            ...player,
            present: newPresentArray, // Set present to null
          };
        }
        return player; // Return the unchanged player for other cases
      });
    } else {
      // Undo swap steal
      return playerData.map((player) => {
        if (player.id === player1Id || player.id === player2Id) {
          const newPresentArray = player.present;
          newPresentArray.pop();
          return {
            ...player,
            present: newPresentArray, // Set present to null
          };
        }
        return player; // Return the unchanged player for other cases
      });
    }
  }
  // Default case: return original playerData if no conditions are met
  return playerData;
};

export const removePresentHistory = (playerData, previousMoveData) => {
  const updatedArray = removePresentHistoryHelper(playerData, previousMoveData);
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: updatedArray });
};

const addPresentHistoryHelper = (playersArray, player1Id, player2Id, present1Id, present2Id) => {
  if (player2Id === null) {
    return playersArray.map((player) => {
      if (player.id === player1Id) {
        const newPresentArray = player.present;
        newPresentArray.push(present1Id)
        return { ...player, present: newPresentArray };
      }
      return player;
    });
  } else {
    if (present2Id === null) {
      return playersArray.map((player) => {
        if (player.id === player2Id) {
          const newPresentArray = player.present;
          newPresentArray.push(null);
          return { ...player, present: newPresentArray };
        }
        return player;
      });
    } else {
      return playersArray.map((player) => {
        if (player.id === player2Id) {
          const newPresentArray = player.present;
          newPresentArray.push(present1Id);
          return { ...player, present: newPresentArray };
        } else {
          if (player.id === player1Id) {
            const newPresentArray = player.present;
            newPresentArray.push(present2Id);
            return { ...player, present: newPresentArray };
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
    present: [null]
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
    present: [null]
  }))
  return ({ type: PLAYERS_ACTION_TYPES.SET_PLAYERS, payload: resetPlayerData });
}