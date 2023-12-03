import { useSelector } from 'react-redux'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector';

// styles
import './GameHistory.scss'

export default function GameHistory({ history }) {
  const players = useSelector(selectPlayers);
  const presents = useSelector(selectPresents);

  const createTurnString = (turn) => {
    // const name = players[turn[0]].name
    const name = players[turn[0]].id
    const actionTaken = turn[1]
    // const present = presents[turn[2]].name
    const present = presents[turn[2]].id

    return `${name} ${actionTaken} ${present}`
  }
  
  return (
    <div className='game-history-container'>
      {history.map((turn) => (
        <h2 key={turn}>{createTurnString(turn)}</h2>
      ))}
    </div>
  )
}
