import { PRESENTS_ACTION_TYPES } from "./presents.types";

export const resetPresentsState = () => {
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: [] })
};
export const setPresents = (presentData) => {
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: presentData })
};
export const setCardImgsUploaded = (status) => {
  return ({ type: PRESENTS_ACTION_TYPES.SET_CARD_IMGS_UPLOADED, payload: status })
};

// shuffle presentsData
export const shufflePresents = (presentData) => {
  let currentIndex = presentData.length, randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [presentData[currentIndex], presentData[randomIndex]] = [
      presentData[randomIndex], presentData[currentIndex]];
  };

  const shuffledPresentData = presentData.map((object, index) => {
    return { ...object, id: index };
  });

  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: shuffledPresentData });
};

// handle swap (last move in game)
const swapOwnersHelper = (presentsArray, moveData) => {
  const { player1Id, player2Id, present1Id, present2Id } = moveData;

  return presentsArray.map(present => {
    if (present.id === present2Id) {
      const updatedHistory = present.ownerHistory.map(owner => owner);
      updatedHistory.push(player1Id);
      return { ...present, ownerHistory: updatedHistory };
    }
    if (present.id === present1Id) {
      const updatedHistory = present.ownerHistory.map(owner => owner);
      updatedHistory.push(player2Id);
      return { ...present, ownerHistory: updatedHistory };
    }
    return present;
  });
}
export const swapOwners = (presentsArray, moveData) => {
  const swappedOwnerArray = swapOwnersHelper(presentsArray, moveData)
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: swappedOwnerArray })
};


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
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: updatedArray })
};

const addOwnerHistoryHelper = (presentsArray, player1Id, player2Id, present1Id, present2Id) => {
  if (player2Id === null) {
    // move = Open
    return presentsArray.map((present) => {
      if (present.id === present1Id) {
        const updatedHistory = present.ownerHistory.map(owner => owner)
        updatedHistory.push(player1Id)
        return { ...present, ownerHistory: updatedHistory };
      }
      return present;
    });
  } else {
    // move = Steal
    if (present1Id === null) {
      // move = Steal without swapping
      return presentsArray.map((present) => {
        if (present.id === present2Id) {
          const updatedHistory = present.ownerHistory.map(owner => owner)
          updatedHistory.push(player1Id)
          return { ...present, ownerHistory: updatedHistory, stealsLeft: present.stealsLeft - 1 };
        }
        return present;
      });
    } else {
      // move = Steal with swapping
      return presentsArray.map((present) => {
        if (present.id === present2Id) {
          const updatedHistory = present.ownerHistory.map(owner => owner);
          updatedHistory.push(player1Id);
          return { ...present, ownerHistory: updatedHistory, stealsLeft: present.stealsLeft - 1 };
        } else {
          if (present.id === present1Id) {
            const updatedHistory = present.ownerHistory.map(owner => owner);
            updatedHistory.push(player2Id);
            return { ...present, ownerHistory: updatedHistory };
          }
        }
        return present;
      });
    }
  }
}
export const addOwnerHistory = (presentsArray, moveData) => {
  const { player1Id, player2Id, present1Id, present2Id } = moveData;
  const updatedArray = addOwnerHistoryHelper(presentsArray, player1Id, player2Id, present1Id, present2Id);
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: updatedArray });
};



export const resetPresentsHistory = (presentData) => {
  const resetPresentsData = presentData.map(present => ({
    ...present,
    ownerHistory: []
  }))
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: resetPresentsData });
}