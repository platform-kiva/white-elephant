import { PRESENTS_ACTION_TYPES } from "./presents.types"

const swapOwnersHelper = (presentsArray, thief, victim, thiefsPresent, victimsPresent) => {
    return presentsArray.map(present => {
        if (present.id === victimsPresent) {
            const updatedHistory = present.ownerHistory.map(owner => owner)
            updatedHistory.push(thief)
            return { ...present, ownerHistory: updatedHistory}
        }
        if (present.id === thiefsPresent) {
          const updatedHistory = present.ownerHistory.map(owner => owner)
          updatedHistory.push(victim)
          return { ...present, ownerHistory: updatedHistory}
      }
        return present;
    });
};

export const swapOwners = (presentsArray, thief, victim, thiefsPresent, victimsPresent) => {
    const swappedOwnerArray = swapOwnersHelper(presentsArray, thief, victim, thiefsPresent, victimsPresent)
    return ({ type: PRESENTS_ACTION_TYPES.SWAP_OWNERS, payload: swappedOwnerArray })
}

const removeOwnerHistoryHelper = (presentsArray, presentID, wasStolen) => {
    return presentsArray.map((present) => {
        if (present.id === presentID) {
          const updatedHistory = present.ownerHistory.slice(0, -1)
          if (wasStolen) {
            return { ...present, ownerHistory: updatedHistory, stealsLeft: present.stealsLeft + 1 };
          } else {
            return { ...present, ownerHistory: updatedHistory };
          }
          
        }
        return present;
      });
}

export const removeOwnerHistory = (presentsArray, presentID, wasStolen) => {
    const updatedArray = removeOwnerHistoryHelper(presentsArray, presentID, wasStolen)
    return ({ type: PRESENTS_ACTION_TYPES.REMOVE_OWNER_HISTORY, payload: updatedArray })
}

const addOwnerHistoryHelper = (presentsArray, presentID, playerID, isBeingStolen) => {
    return presentsArray.map((present) => {
      if (present.id === presentID) {
        const updatedHistory = present.ownerHistory.map(owner => owner)
        updatedHistory.push(playerID)
        if (isBeingStolen) {
            return { ...present, ownerHistory: updatedHistory, stealsLeft: present.stealsLeft - 1 };
        }
        else {
            return { ...present, ownerHistory: updatedHistory };
        }
      }
      return present;
    });
  }
  
  export const addOwnerHistory = (presentsArray, presentID, playerID, isBeingStolen) => {
    const updatedArray = addOwnerHistoryHelper(presentsArray, presentID, playerID, isBeingStolen);
    return ({ type: PRESENTS_ACTION_TYPES.ADD_OWNER_HISTORY, payload: updatedArray});
  };

  export const resetPresentsState = () => {
    return ({ type: PRESENTS_ACTION_TYPES.RESET_PRESENTS_STATE })
  }

  export const setPresents = (presentData) => {
    return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: presentData })
  }
  export const setCardImgsUploaded = (status) => {
    return ({ type: PRESENTS_ACTION_TYPES.SET_CARD_IMGS_UPLOADED, payload: status })
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
  
  export const shufflePresents = (presentsArray) => {
    const shuffledPresentsArray = shuffleArray(presentsArray);
    return ({ type: PRESENTS_ACTION_TYPES.SHUFFLE_PRESENTS, payload: shuffledPresentsArray });
  };