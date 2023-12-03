import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { swapOwners } from '../../store/presents/presents.action'
import { setLastGiftStolen, setStolenGiftTurnIndex, addGameHistory, setGameIsOver, setFirstPlayerReplayed } from '../../store/game/game.action'
import { setTurnIndex } from '../../store/game/game.action'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector'
import { selectGameHistory, selectLastGiftStolen, selectTurnIndex, selectFirstPlayerReplayed } from '../../store/game/game.selector'
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector'
import { selectShuffleStatus } from '../../store/game/game.selector'
import { useNavigate } from 'react-router-dom';
import { addPresentHistory } from '../../store/players/players.action'
import { addOwnerHistory, swapOwners } from '../../store/presents/presents.action'

// styles
import './PresentsDisplay.scss'
import Present from '../present/Present'

export default function PresentsDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const players = useSelector(selectPlayers)
  const presents = useSelector(selectPresents)
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
    if (turnIndex === players.length) {
      dispatch(setFirstPlayerReplayed())
      dispatch(setTurnIndex(0))
    }
  }, [turnIndex, dispatch, players.length])

  const handleOpen = (playerID, presentID) => {
    dispatch(addGameHistory(gameHistory, [playerID, "opens", presentID]))
    dispatch(addPresentHistory(players, playerID, presentID))
    dispatch(addOwnerHistory(presents, presentID, playerID, false))
    dispatch(setLastGiftStolen(null))
    dispatch(setStolenGiftTurnIndex(null))

    if (firstPlayerReplayed) {
      dispatch(setGameIsOver())
      dispatch(setTurnIndex(players.length))
    } else {
      dispatch(setTurnIndex(turnIndex + 1))
    }
  }

  const handleSteal = (thief, victim, present) => {
    if (present.id !== lastGiftStolen) {
      if (present.stealsLeft !== 0) {
        dispatch(addGameHistory(gameHistory, [thief, "steals", present.id, "from", victim]))
        dispatch(addPresentHistory(players, thief, present.id))
        dispatch(addOwnerHistory(presents, present.id, thief, true))
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
    const thiefsPresent = players[thief].presentHistory[players[thief].presentHistory.length - 1]
    const victim = presents[stolenPresent].ownerHistory[presents[stolenPresent].ownerHistory.length - 1]
    const victimsPresent = players[victim].presentHistory[players[victim].presentHistory.length - 1]
    console.log("Thief: ", thief)
    console.log("Thief's Present: ", thiefsPresent)
    console.log("Victim: ", victim)
    console.log("Victim's Present: ", victimsPresent)

    dispatch(addGameHistory(gameHistory, [thief, "steals", victimsPresent, "from", victim], [victim, "is given", thiefsPresent, "from", thief]))
    dispatch(swapOwners(presents, thief, victim, thiefsPresent, victimsPresent))
    dispatch(setGameIsOver())
  }

  const handleAction = (presentID) => {
    let player = null
    const present = presents[presentID]
    if (stolenGiftTurnIndex === null) {
      player = players[turnIndex].id
    } else {
      player = players[stolenGiftTurnIndex].id
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
    <div className='presents-display-container'>
      {presents.map((present) => (
          <div key={present.id} onClick={() => handleAction(present.id)}>
            <Present present={present} ownerName={present.ownerHistory} />
          </div>
      ))}
    </div>
  )
}
