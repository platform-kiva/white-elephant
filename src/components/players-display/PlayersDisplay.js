import { useDispatch, useSelector } from 'react-redux';
import { removePresentHistory } from '../../store/players/players.action.js';
import { selectPlayerData } from '../../store/players/players.selector';
import { setFirstPlayerReplayed, setLastGiftStolen, setStolenGiftTurnIndex, setTurnIndex } from '../../store/game/game.action.js'
import { selectGameHistory, selectStolenGiftTurnIndex, selectTurnIndex } from '../../store/game/game.selector';
import { removeOwnerHistory } from '../../store/presents/presents.action.js';
import { selectPresentData } from '../../store/presents/presents.selector.js';
import { fadeInUp } from '../../animations/Animations.js';

// assets
import turnIcon from '../../assets/turn-icon.png';

// styles
import {
  PlayersDisplayContainer,
  BtnContainer,
  GameLogoContainer,
  GameHistoryContainer,
  PlayerNamesContainer,
  PlayerContainer,
  PlayerName,
  TurnIcon
} from './PlayersDisplay.styles.js';

// components
import Btn from '../btn/Btn';
import GameLogo from '../game-logo/GameLogo';
import GameHistory from '../game-history/GameHistory';

export default function PlayersDisplay() {
  const dispatch = useDispatch();
  const gameHistory = useSelector(selectGameHistory);
  const playerData = useSelector(selectPlayerData);
  const presentData = useSelector(selectPresentData);
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex);
  const turnIndex = useSelector(selectTurnIndex);

  const handleUndo = () => {
    dispatch(setFirstPlayerReplayed(false));
    if (gameHistory.length !== 0) {
      const lastTurn = gameHistory.pop(-1);
      const lastTurnWasASteal = lastTurn.length === 5 ? true : false;
      if (!lastTurnWasASteal) {
        dispatch(removeOwnerHistory(presentData, lastTurn[2], false))
        dispatch(removePresentHistory(playerData, lastTurn[0], lastTurn[4]))
      } else {
        dispatch(removeOwnerHistory(presentData, lastTurn[2], true))
        dispatch(removePresentHistory(playerData, lastTurn[5], lastTurn[2]))
      };
      dispatch(setTurnIndex(lastTurn[0]));
      const previousTurn = gameHistory[gameHistory.length - 1]
      if (previousTurn) {
        if (previousTurn.length === 5) {
          const previousTurn = gameHistory[gameHistory.length - 1];
          dispatch(setLastGiftStolen(previousTurn[2]));
          dispatch(setStolenGiftTurnIndex(previousTurn[4]));
        } else {
          dispatch(setLastGiftStolen(null));
          dispatch(setStolenGiftTurnIndex(null));
        };
      };
    };
  };

  return (
    <PlayersDisplayContainer>
      <GameLogoContainer>
        <GameLogo size={"small"} />
      </GameLogoContainer>
      {gameHistory.length !== 0 &&
        <GameHistoryContainer
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6 * 0.05}
        >
          <GameHistory history={gameHistory} />
          <BtnContainer
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2 * 0.05}
          >
            <div onClick={() => handleUndo()}>
              <Btn label={"UNDO MOVE"} isActive={gameHistory.length !== 0} />
            </div>
          </BtnContainer>
        </GameHistoryContainer>
      }
      {turnIndex !== playerData.length ?
        <PlayerNamesContainer>
          {playerData.map((player, index) => (
            <PlayerContainer
              key={player.name}
              $isActive={player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              {player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name &&
                <h3>NOW PLAYING:</h3>
              }
              <PlayerName
                $isActive={player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name}
              >
                {player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name &&
                  <TurnIcon src={turnIcon} alt='turn icon' />
                }

                <h2>{player.name}</h2>

                {player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name &&
                  <TurnIcon src={turnIcon} alt='turn icon' />
                }
              </PlayerName>
            </PlayerContainer>
          ))}
        </PlayerNamesContainer>
        :
        <PlayerNamesContainer>
          {playerData.map((player) => (
            <PlayerContainer key={player.name}>
              <h2>{player.name}</h2>
            </PlayerContainer>
          ))}
        </PlayerNamesContainer>
      }
    </PlayersDisplayContainer>
  )
}
