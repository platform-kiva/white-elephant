import { useSelector } from 'react-redux'
import { selectGameIsOver } from '../../store/game/game.selector'

// styles
import './Play.scss'

// components
import PlayersDisplay from '../../components/players-display/PlayersDisplay'
import PresentsDisplay from '../../components/presents-display/PresentsDisplay'

export default function Play() {
  const gameIsOver = useSelector(selectGameIsOver);
  
  return (
    <div className='play-container'>
        {!gameIsOver &&
          <PlayersDisplay/>
        }
        <PresentsDisplay />
    </div>
  )
}
