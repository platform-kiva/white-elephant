import { useDispatch, useSelector } from 'react-redux'
import { assignGift } from '../../store/players/players.action'
import { assignOwner } from '../../store/presents/presents.action'
import { setLastGiftStolen, setStolenGiftTurnIndex } from '../../store/game/game.action'
import { setTurnIndex } from '../../store/game/game.action'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector'
import { selectLastGiftStolen, selectTurnIndex } from '../../store/game/game.selector'
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector'
import { selectShuffleStatus } from '../../store/game/game.selector'
import { useNavigate } from 'react-router-dom'

// styles
import './PresentsDisplay.scss'
import Present from '../present/Present'
import { useEffect } from 'react'

export default function PresentsDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const players = useSelector(selectPlayers)
  const presents = useSelector(selectPresents)
  const turnIndex = useSelector(selectTurnIndex)
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex)
  const lastGiftStolen = useSelector(selectLastGiftStolen)
  const shuffleStatus = useSelector(selectShuffleStatus)

  useEffect(() => {
    if (!shuffleStatus) {
      navigate("/shuffle-players")
    }
  }, [shuffleStatus, navigate])

  const handleAction = (presentID) => {
    let player = null
    const present = presents[presentID]
    if (stolenGiftTurnIndex === null) {
      player = players[turnIndex]
    } else {
      player = players[stolenGiftTurnIndex]
    }

    if (present.owner === null) {
      if (stolenGiftTurnIndex === null) {
        dispatch(assignGift(players, present.id, turnIndex, null))
        dispatch(assignOwner(presents, { name: player.playerName, index: player.playersTurnInd }, present.id, false))
        dispatch(setTurnIndex(turnIndex + 1))
        dispatch(setStolenGiftTurnIndex(null))
      } else {
        dispatch(assignGift(players, present.id, stolenGiftTurnIndex, null))
        dispatch(assignOwner(presents, { name: player.playerName, index: player.playersTurnInd }, present.id, false))
        dispatch(setTurnIndex(turnIndex + 1))
        dispatch(setStolenGiftTurnIndex(null))
        dispatch(setLastGiftStolen(null))
      }
    } else {
      if (presentID !== lastGiftStolen) {
        if (present.stealsLeft !== 0) {
          const currentOwner = present.owner
          const newOwner = player
          dispatch(setStolenGiftTurnIndex(present.owner.index))
          dispatch(assignGift(players, present.id, turnIndex, currentOwner.index))
          dispatch(assignOwner(presents, { name: newOwner.playerName, index: newOwner.playersTurnInd }, present.id, true)) 
          dispatch(setLastGiftStolen(presentID))
        } else {
          alert("Present cannot be stolen any more times")
        }
      } else {
        alert("You cannot immediately steal back the same gift!")
      }
    }
  }


  return (
    <div className='presents-display-container'>
        {presents.map((present) => (
            <div key={present.id} onClick={() => handleAction(present.id)}>
              <Present present={present} />
            </div>
        ))}
    </div>
  )
}
