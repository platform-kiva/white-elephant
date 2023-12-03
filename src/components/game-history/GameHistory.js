import { useSelector } from 'react-redux'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector';

// styles
import { GameHistoryContainer } from './GameHistory.styles.js'

export default function GameHistory({ history }) {
  const players = useSelector(selectPlayers);
  const presents = useSelector(selectPresents);

  const createTurnString = (turn) => {
    const name = players[turn[0]].name
    const actionTaken = turn[1]
    const present = presents[turn[2]].name

    return `${name} ${actionTaken} ${present}`
  }
  
  return (
    <GameHistoryContainer>
      {history.map((turn) => (
        <h2 key={turn}>{createTurnString(turn)}</h2>
      ))}
    </GameHistoryContainer>
  )
}
