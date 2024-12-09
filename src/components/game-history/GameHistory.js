// styles
import { GameHistoryContainer } from './GameHistory.styles.js'

export default function GameHistory({ history }) {
  const reversedHistory = [...history].reverse();
  
  return (
    <>
      {history.length !== 0 &&
        <GameHistoryContainer>
          {reversedHistory.map((turn, index) => (
            <h2 key={index} style={{ opacity: index === 0 ? 1 : 0.5 }}>{turn.text}</h2>
          ))}
        </GameHistoryContainer> 
      }
    </>
  )
}
