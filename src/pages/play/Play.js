// styles
import './Play.scss'

// components
import PlayersDisplay from '../../components/players-display/PlayersDisplay'
import PresentsDisplay from '../../components/presents-display/PresentsDisplay'

export default function Play() {
  return (
    <div className='play-container'>
        <PlayersDisplay/>
        <PresentsDisplay />
    </div>
  )
}
