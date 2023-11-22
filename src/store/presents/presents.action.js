import { PRESENTS_ACTION_TYPES } from "./presents.types"

const assignOwnerHelper = (presentsArray, ownerToAssign, presentInd, isBeingStolen) => {
    if (!isBeingStolen) {
        return presentsArray.map((present) => 
        present.id === presentInd
            ? {...present, owner: ownerToAssign }
            : present
        )
    } else {
        return presentsArray.map((present) => 
        present.id === presentInd
            ? {...present, owner: ownerToAssign, stealsLeft: present.stealsLeft - 1 }
            : present
        )
    }
}
export const assignOwner = (presentsArray, ownerToAssign, presentInd, isBeingStolen) => {
    const assignedOwnerArray = assignOwnerHelper(presentsArray, ownerToAssign, presentInd, isBeingStolen)
    return ({ type: PRESENTS_ACTION_TYPES.ASSIGN_OWNER, payload: assignedOwnerArray })
}


const swapOwnersHelper = (presentsArray, thief, victim) => {
    return presentsArray.map(present => {
        if (present.owner.name === thief.name) {
            return { ...present, owner: victim };
        } else if (present.owner.name === victim.name) {
            return { ...present, owner: thief };
        }
        return present;
    });
};

export const swapOwners = (presentsArray, thief, victim, thiefPresentID, victimPresentID) => {
    const swappedOwnerArray = swapOwnersHelper(presentsArray, thief, victim, thiefPresentID, victimPresentID)
    return ({ type: PRESENTS_ACTION_TYPES.SWAP_OWNERS, payload: swappedOwnerArray })
}