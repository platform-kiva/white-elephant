import { PLAYERS_ACTION_TYPES } from "./players.types"

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

const assignPresentHelper = (playersArray, presentToAssign, turnInd) => {
    return playersArray.map((player) => 
        player.playerName === playersArray[turnInd].playerName
            ? {...player, gift: presentToAssign}
            : player
    )
}


export const assignGift = (playersArray, presentToAssign, turnInd) => {
    const assignedPlayersArray = assignPresentHelper(playersArray, presentToAssign, turnInd)
    return ({ type: PLAYERS_ACTION_TYPES.ASSIGN_GIFT, payload: assignedPlayersArray })
}

export const shufflePlayers = (playersArray) => {
    const shuffledPlayersArray = shuffleArray(playersArray)
    return ({ type: PLAYERS_ACTION_TYPES.SHUFFLE_PLAYERS, payload: shuffledPlayersArray })
}