import { useSelector } from 'react-redux'
import { selectPlayerData } from '../../store/players/players.selector'
import { selectPresentData } from '../../store/presents/presents.selector';

// styles
import { GameHistoryContainer } from './GameHistory.styles.js'

export default function GameHistory({ history }) {
  const playerData = useSelector(selectPlayerData);
  const presentData = useSelector(selectPresentData);
  const reversedHistory = [...history].reverse();

  const createTurnString = (turn) => {
    const name = playerData[turn[0]].name
    const actionTaken = turn[1]
    const present = presentData[turn[2]].name

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
