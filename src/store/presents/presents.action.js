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