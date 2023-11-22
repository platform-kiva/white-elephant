import { useSelector } from 'react-redux';
import { selectPlayers } from '../../store/players/players.selector';
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector';
import { selectTurnIndex } from '../../store/game/game.selector';
import { selectGameHistory } from '../../store/game/game.selector';

// styles
import './PlayersDisplay.scss';

// components
import Btn from '../btn/Btn';
import GameLogo from '../game-logo/GameLogo';
import GameHistory from '../game-history/GameHistory';

export default function PlayersDisplay() {
  const players = useSelector(selectPlayers);
  const turnIndex = useSelector(selectTurnIndex);
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex);
  const gameHistory = useSelector(selectGameHistory);

  return (
    <div className='players-display-container'>
      <div className='game-logo-container'>
        <GameLogo size={"small"}/>
      </div>
      <div className='btn-container'>
        <Btn label={"UNDO"} isActive={gameHistory.length !== 0}/>
      </div>
      {turnIndex !== players.length &&
        <div className='player-names-container'>
          {players.map((player) => (
            <div key={player.playerName} className={`player-container ${player.playerName === players[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].playerName ? 'player-container-active' : ''}`}>
              <h2 style={{ fontSize: player.playerName === players[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].playerName ? '24px' : '' }}>{player.playerName}</h2>
            </div>
          ))}
        </div>
      }
      {turnIndex === players.length &&
        <div className='player-names-container'>
          {players.map((player) => (
            <div key={player.playerName} className={`player-container`}>
              <h2>{player.playerName}</h2>
            </div>
          ))}
        </div>
      }
      <GameHistory history={gameHistory}/>
    </div>
  )
}
