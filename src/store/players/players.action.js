import { PLAYERS_ACTION_TYPES } from "./players.types"

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    const newArrayWithTurnInd = array.map((object, index) => {
        return { ...object, playersTurnInd: index };
    });

    return newArrayWithTurnInd;
}

const assignPresentHelper = (playersArray, presentToAssign, turnInd, resetIndex) => {
    return playersArray.map((player, index) => {
      if (player.playersTurnInd === turnInd) {
        return { ...player, gift: presentToAssign };
      }
      if (player.playersTurnInd === resetIndex) {
        return { ...player, gift: null };
      }
      return player;
    });
  };
  

  export const assignGift = (playersArray, presentToAssign, turnInd, resetIndex) => {
      const assignedPlayersArray = assignPresentHelper(playersArray, presentToAssign, turnInd, resetIndex);
      return ({ type: PLAYERS_ACTION_TYPES.ASSIGN_GIFT, payload: assignedPlayersArray });
  };
  

export const shufflePlayers = (playersArray) => {
    const shuffledPlayersArray = shuffleArray(playersArray)
    return ({ type: PLAYERS_ACTION_TYPES.SHUFFLE_PLAYERS, payload: shuffledPlayersArray })
}