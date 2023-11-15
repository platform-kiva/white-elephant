import { useSelector } from 'react-redux'

// selectors
import { selectShuffleStatus } from '../../store/game/game.selector'

// styles
import './Play.scss'

// components
import PlayersDisplay from '../../components/players-display/PlayersDisplay'
import PresentsDisplay from '../../components/presents-display/PresentsDisplay'

export default function Play() {
  const shuffleStatus = useSelector(selectShuffleStatus)

  return (
    <div className='play-container'>
        <PlayersDisplay/>
        {shuffleStatus !== false &&
          <PresentsDisplay />
        }
    </div>
  )
}
