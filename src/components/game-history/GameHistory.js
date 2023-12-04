import { useSelector } from 'react-redux'
import { selectPlayers } from '../../store/players/players.selector'
import { selectPresents } from '../../store/presents/presents.selector';

// styles
import { GameHistoryContainer } from './GameHistory.styles.js'

export default function GameHistory({ history }) {
  const players = useSelector(selectPlayers);
  const presents = useSelector(selectPresents);
  const reversedHistory = [...history].reverse();

  const createTurnString = (turn) => {
    const name = players[turn[0]].name
    const actionTaken = turn[1]
    const present = presents[turn[2]].name

    return `${name} ${actionTaken} ${present}`
  }
  
  return (
    <>
      {history.length !== 0 &&
        <GameHistoryContainer>
          {reversedHistory.map((turn, index) => (
            <h2 key={index} style={{ opacity: index === 0 ? 1 : 0.5 }}>{createTurnString(turn)}</h2>
          ))}
        </GameHistoryContainer> 
      }
    </>
  )
}
