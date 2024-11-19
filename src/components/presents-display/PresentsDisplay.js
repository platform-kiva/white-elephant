import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { swapOwners } from '../../store/presents/presents.action'
import { setLastGiftStolen, setStolenGiftTurnIndex, addGameHistory, setGameIsOver, setFirstPlayerReplayed } from '../../store/game/game.action'
import { setTurnIndex } from '../../store/game/game.action'
import { selectPlayerData } from '../../store/players/players.selector'
import { selectPresentData } from '../../store/presents/presents.selector'
import { selectGameHistory, selectLastGiftStolen, selectTurnIndex, selectFirstPlayerReplayed } from '../../store/game/game.selector'
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector'
import { selectShuffleStatus } from '../../store/game/game.selector'
import { useNavigate } from 'react-router-dom';
import { addPresentHistory } from '../../store/players/players.action'
import { addOwnerHistory, swapOwners } from '../../store/presents/presents.action'

// styles
import { PresentsDisplayContainer } from './PresentsDisplay.styles.js'
import Present from '../present/Present'

export default function PresentsDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const playerData = useSelector(selectPlayerData)
  const presentData = useSelector(selectPresentData)
  const turnIndex = useSelector(selectTurnIndex)
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex)
  const lastGiftStolen = useSelector(selectLastGiftStolen)
  const shuffleStatus = useSelector(selectShuffleStatus)
  const gameHistory = useSelector(selectGameHistory)
  const firstPlayerReplayed = useSelector(selectFirstPlayerReplayed)

  useEffect(() => {
    if (!shuffleStatus) {
      navigate("/shuffle-players")
    }
  }, [shuffleStatus, navigate])

  useEffect(() => {
    if (turnIndex === playerData.length) {
      dispatch(setFirstPlayerReplayed())
      dispatch(setTurnIndex(0))
    }
  }, [turnIndex, dispatch, playerData.length])

  const handleOpen = (playerID, presentID) => {
    dispatch(addGameHistory(gameHistory, [playerID, "opened", presentID]))
    dispatch(addPresentHistory(playerData, playerID, presentID))
    dispatch(addOwnerHistory(presentData, presentID, playerID, false))
    dispatch(setLastGiftStolen(null))
    dispatch(setStolenGiftTurnIndex(null))

    if (firstPlayerReplayed) {
      dispatch(setGameIsOver())
      dispatch(setTurnIndex(playerData.length))
    } else {
      dispatch(setTurnIndex(turnIndex + 1))
    }
  }

  const handleSteal = (thief, victim, present) => {
    if (present.id !== lastGiftStolen) {
      if (present.stealsLeft !== 0) {
        dispatch(addGameHistory(gameHistory, [thief, "stole", present.id, "from", victim]))
        dispatch(addPresentHistory(playerData, thief, present.id))
        dispatch(addOwnerHistory(presentData, present.id, thief, true))
        dispatch(setLastGiftStolen(present.id))
        dispatch(setStolenGiftTurnIndex(victim))
      } else {
        alert("Present cannot be stolen any more times")
      }
    } else {
      alert("You cannot immediately steal back the same gift!")
    }
  }

  const handleSwap = (thief, stolenPresent) => {
    const thiefsPresent = playerData[thief].presentHistory[playerData[thief].presentHistory.length - 1]
    const victim = presentData[stolenPresent].ownerHistory[presentData[stolenPresent].ownerHistory.length - 1]
    const victimsPresent = playerData[victim].presentHistory[playerData[victim].presentHistory.length - 1]
    dispatch(addGameHistory(gameHistory, [thief, "stole", victimsPresent, "from", victim], [victim, "is given", thiefsPresent, "from", thief]))
    dispatch(swapOwners(presentData, thief, victim, thiefsPresent, victimsPresent))
    dispatch(setGameIsOver())
  }

  const handleAction = (presentID) => {
    let player = null
    const present = presentData[presentID]
    if (stolenGiftTurnIndex === null) {
      player = playerData[turnIndex].id
    } else {
      player = playerData[stolenGiftTurnIndex].id
    }
    if (present.ownerHistory.length === 0) {
      handleOpen(player, present.id)
    } else {
      if (!firstPlayerReplayed) {
        handleSteal(player, present.ownerHistory[present.ownerHistory.length - 1], present)
      } else {
        handleSwap(player, presentID)
      }
      
    }
  }

  return (
    <PresentsDisplayContainer>
      {presentData.map((present) => (
          <div key={present.id} onClick={() => handleAction(present.id)}>
            <Present present={present} ownerName={present.ownerHistory} />
          </div>
      ))}
    </PresentsDisplayContainer>
  )
}
