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
      const newOwnerArray = present.owner;
      newOwnerArray.push(player1Id);
      return { ...present, owner: newOwnerArray };
    }
    if (present.id === present1Id) {
      const newOwnerArray = present.owner;
      newOwnerArray.push(player2Id);
      return { ...present, owner: newOwnerArray };
    }
    return present;
  });
}
export const swapOwners = (presentsArray, moveData) => {
  const swappedOwnerArray = swapOwnersHelper(presentsArray, moveData)
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: swappedOwnerArray })
};

// remove owners (undo move)
const removeOwnerHistoryHelper = (presentData, previousMoveData) => {
  const { present1Id, present2Id, type } = previousMoveData;
  if (type === "open") {
    return presentData.map((present) => {
      if (present.id === present1Id) {
        const newOwnerArray = present.owner;
        newOwnerArray.pop();
        return { ...present, owner: newOwnerArray };
      }
      return present;
    });
  } else if (type === "steal") {
    if (present1Id === null) {
      // Undo no-swap steal
      return presentData.map((present) => {
        if (present.id === present2Id) {
          const newOwnerArray = present.owner;
          newOwnerArray.pop();
          const newStealsLeft = present.stealsLeft + 1;
          return { ...present, owner: newOwnerArray, stealsLeft: newStealsLeft };
        }
        return present;
      });
    } else {
      // Undo swap steal
      return presentData.map((present) => {
        if (present.id === present1Id || present.id === present2Id) {
          const newOwnerArray = present.owner;
          newOwnerArray.pop();
          const newStealsLeft = present.stealsLeft + 1;
          return { ...present, owner: newOwnerArray, stealsLeft: newStealsLeft };
        }
        return present;
      });
    }
  }
  return presentData;
};
export const removeOwnerHistory = (presentData, previousMoveData) => {
  const updatedPresentData = removeOwnerHistoryHelper(presentData, previousMoveData)
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: updatedPresentData })
};

// add owners
const addOwnerHistoryHelper = (presentsArray, player1Id, player2Id, present1Id, present2Id) => {
  if (player2Id === null) {
    return presentsArray.map((present) => {
      if (present.id === present1Id) {
        const newOwnerArray = present.owner;
        newOwnerArray.push(player1Id);
        return { ...present, owner: newOwnerArray };
      }
      return present;
    });
  } else {
    if (present1Id === null) {
      return presentsArray.map((present) => {
        if (present.id === present2Id) {
          const newOwnerArray = present.owner;
          newOwnerArray.push(player1Id);
          return { ...present, owner: newOwnerArray, stealsLeft: present.stealsLeft - 1 };
        }
        return present;
      });
    } else {
      return presentsArray.map((present) => {
        if (present.id === present2Id) {
          const newOwnerArray = present.owner;
          newOwnerArray.push(player1Id);
          return { ...present, owner: newOwnerArray, stealsLeft: present.stealsLeft - 1 };
        } else {
          if (present.id === present1Id) {
            const newOwnerArray = present.owner;
            newOwnerArray.push(player2Id);
            return { ...present, owner: newOwnerArray };
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
    owner: [null],
    stealsLeft: 3
  }))
  return ({ type: PRESENTS_ACTION_TYPES.SET_PRESENTS, payload: resetPresentsData });
}