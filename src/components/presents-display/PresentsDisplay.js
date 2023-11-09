import { useDispatch, useSelector } from 'react-redux'
import { assignGift } from '../../store/players/players.action'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector'
import { selectTurnIndex } from '../../store/game/game.selector'

// styles
import './PresentsDisplay.scss'

// data
import { PRESENT_DATA } from '../../data/present_data'
import { useEffect } from 'react'

export default function PresentsDisplay() {
  const dispatch = useDispatch()
  const players = useSelector(selectPlayers)
  const presents = useSelector(selectPresents)
  const turnIndex = useSelector(selectTurnIndex)

  const handlePresentAssignment = (presentID) => {
    dispatch(assignGift(players, presents[presentID], turnIndex))
  }

  return (
    <div className='presents-display-container'>
        {PRESENT_DATA.map((present) => (
            <div key={present.id} className='present-container' onClick={() => handlePresentAssignment(present.id)}>
                <img src={present.coverImg} alt="gift graphic"/>
            </div>
        ))}
    </div>
  )
}
