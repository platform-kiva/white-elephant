import { useDispatch, useSelector } from 'react-redux'
import { shufflePlayers } from '../../store/players/players.action';
import { setShuffleStatus } from '../../store/game/game.action';

// selectors
import { selectPlayers } from '../../store/players/players.selector'
import { selectShuffleStatus, selectStolenGiftTurnIndex } from '../../store/game/game.selector';
import { selectTurnIndex } from '../../store/game/game.selector';


// styles
import './PlayersDisplay.scss'

export default function PlayersDisplay() {
  const dispatch = useDispatch()
  const players = useSelector(selectPlayers);
  const turnIndex = useSelector(selectTurnIndex)
  const shuffleStatus = useSelector(selectShuffleStatus)
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex)
  

  const handleShuffle = () => {
    dispatch(shufflePlayers(players))
    dispatch(setShuffleStatus())
  }

  return (
    <div className='players-display-container' style={{ paddingTop: shuffleStatus === false ? '20px' : '50px' }}>
      {shuffleStatus === false &&
        <button onClick={() => handleShuffle()}>SHUFFLE</button>
      }
      {turnIndex !== players.length &&
        <>
          {players.map((player) => (
            <div key={player.playerName} className={`player-container ${player.playerName === players[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].playerName ? 'player-container-active' : ''}`}>
              <h2 style={{ fontSize: player.playerName === players[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].playerName ? '24px' : '' }}>{player.playerName}</h2>
            </div>
          ))}
        </>
      }
      {turnIndex === players.length &&
        <>
          {players.map((player) => (
            <div key={player.playerName} className={`player-container`}>
              <h2>{player.playerName}</h2>
            </div>
          ))}
        </>
      }
    </div>
  )
}
