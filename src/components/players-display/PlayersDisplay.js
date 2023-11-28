import { useSelector } from 'react-redux';
import { selectPlayers } from '../../store/players/players.selector';
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector';
import { selectTurnIndex } from '../../store/game/game.selector';
import { selectGameHistory } from '../../store/game/game.selector';

// styles
import {
  BtnContainer,
  PlayersDisplayContainer,
  GameLogoContainer,
  PlayerNamesContainer,
  PlayerContainer
} from './PlayersDisplay.styles.js';

// components
import Btn from '../btn/Btn';
import GameLogo from '../game-logo/GameLogo';
import GameHistory from '../game-history/GameHistory';

export default function PlayersDisplay() {
  const players = useSelector(selectPlayers);
  const turnIndex = useSelector(selectTurnIndex);
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex);
  const gameHistory = useSelector(selectGameHistory);

  const handleUndo = () => {
    alert(gameHistory.slice(-1))
  }

  return (
    <PlayersDisplayContainer>
      <GameLogoContainer>
        <GameLogo size={"small"}/>
      </GameLogoContainer>
      <BtnContainer onClick={() => handleUndo()}>
        <Btn label={"UNDO"} isActive={gameHistory.length !== 0}/>
      </BtnContainer>
      {turnIndex !== players.length &&
        <PlayerNamesContainer>
          {players.map((player) => (
            <PlayerContainer key={player.playerName} $isActive={player.playerName === players[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].playerName}>
              <h2>{player.playerName}</h2>
            </PlayerContainer>
          ))}
        </PlayerNamesContainer>
      }
      {turnIndex === players.length &&
        <PlayerNamesContainer>
          {players.map((player) => (
            <div key={player.playerName} className={`player-container`}>
              <h2>{player.playerName}</h2>
            </div>
          ))}
        </PlayerNamesContainer>
      }
      <GameHistory history={gameHistory}/>
    </PlayersDisplayContainer>
  )
}
