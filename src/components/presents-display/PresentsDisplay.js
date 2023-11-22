import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignGift } from '../../store/players/players.action'
import { assignOwner, swapOwners } from '../../store/presents/presents.action'
import { setLastGiftStolen, setStolenGiftTurnIndex, setGameHistory, setGameIsOver, setFirstPlayerReplayed } from '../../store/game/game.action'
import { setTurnIndex } from '../../store/game/game.action'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector'
import { selectGameHistory, selectLastGiftStolen, selectTurnIndex, selectFirstPlayerReplayed } from '../../store/game/game.selector'
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector'
import { selectShuffleStatus } from '../../store/game/game.selector'
import { useNavigate } from 'react-router-dom'

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
    if (turnIndex === 5) {
      dispatch(setFirstPlayerReplayed())
      dispatch(setTurnIndex(0))
    }
  }, [turnIndex, dispatch])

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
        if (firstPlayerReplayed) {
          dispatch(setGameIsOver())
          dispatch(setTurnIndex(players.length))
        } else {
          dispatch(setTurnIndex(turnIndex + 1))
        }
        dispatch(setStolenGiftTurnIndex(null))
        dispatch(setGameHistory(gameHistory, [turnIndex, "opens", present.id]))
      } else {
        dispatch(assignGift(players, present.id, stolenGiftTurnIndex, null))
        dispatch(assignOwner(presents, { name: player.playerName, index: player.playersTurnInd }, present.id, false))
        if (firstPlayerReplayed) {
          dispatch(setGameIsOver())
          dispatch(setTurnIndex(players.length))
        } else {
          dispatch(setTurnIndex(turnIndex + 1))
        }
        dispatch(setStolenGiftTurnIndex(null))
        dispatch(setLastGiftStolen(null))
        dispatch(setGameHistory(gameHistory, [stolenGiftTurnIndex, "opens", present.id]))
      }
    } else {
      if (presentID !== lastGiftStolen) {
        if (present.stealsLeft !== 0) {
          const currentOwner = present.owner
          const newOwner = player
          if (!firstPlayerReplayed) {
            dispatch(setStolenGiftTurnIndex(present.owner.index))
            dispatch(assignGift(players, present.id, turnIndex, currentOwner.index))
            dispatch(assignOwner(presents, { name: newOwner.playerName, index: newOwner.playersTurnInd }, present.id, true)) 
            dispatch(setLastGiftStolen(presentID))
            dispatch(setGameHistory(gameHistory, [player.playersTurnInd, "steals", present.id]))
          } else {
            dispatch(swapOwners(presents, { name: player.playerName, index: player.playersTurnInd }, { name: present.owner.name, index: present.owner.index }))
            dispatch(setGameHistory(gameHistory, [player.playersTurnInd, "steals", present.id]))
            dispatch(setGameIsOver())
          }
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
