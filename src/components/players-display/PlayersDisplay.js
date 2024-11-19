import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removePresentHistory } from '../../store/players/players.action.js';
import { selectPlayerData } from '../../store/players/players.selector';
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector';
import { selectTurnIndex } from '../../store/game/game.selector';
import { selectGameHistory } from '../../store/game/game.selector';
import { setTurnIndex } from '../../store/game/game.action.js'
import { removeOwnerHistory } from '../../store/presents/presents.action.js';
import { selectPresentData } from '../../store/presents/presents.selector.js';
import { setLastGiftStolen, setStolenGiftTurnIndex } from '../../store/game/game.action.js';
import { resetGameState } from '../../store/game/game.action.js';

// assets
import turnIcon from '../../assets/turn-icon.png';

// styles
import {
  BtnContainer,
  PlayersDisplayContainer,
  GameLogoContainer,
  GameHistoryContainer,
  PlayerNamesContainer,
  PlayerContainer,
  TurnIcon
} from './PlayersDisplay.styles.js';

// components
import Btn from '../btn/Btn';
import GameLogo from '../game-logo/GameLogo';
import GameHistory from '../game-history/GameHistory';

export default function PlayersDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerData = useSelector(selectPlayerData);
  const presentData = useSelector(selectPresentData)
  const turnIndex = useSelector(selectTurnIndex);
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex);
  const gameHistory = useSelector(selectGameHistory);

  const handleReset = () => {
    dispatch(resetGameState())
    navigate("/")
  }

  const handleUndo = () => {
    if (gameHistory.length !== 0) {
      const lastTurn = gameHistory.pop(-1)
      const lastTurnWasASteal = lastTurn.length === 5 ? true : false
      console.log(lastTurn)
      if (!lastTurnWasASteal) {
        dispatch(removeOwnerHistory(presentData, lastTurn[2], false))
        dispatch(removePresentHistory(playerData, lastTurn[0], lastTurn[4]))
      } else {
        dispatch(removeOwnerHistory(presentData, lastTurn[2], true))
        dispatch(removePresentHistory(playerData, lastTurn[5], lastTurn[2])) 
      }
      dispatch(setTurnIndex(lastTurn[0]))
      const previousTurn = gameHistory[gameHistory.length - 1]
      console.log(previousTurn)
      if (previousTurn) {
        if (previousTurn.length === 5) {
          const previousTurn = gameHistory[gameHistory.length - 1]
          dispatch(setLastGiftStolen(previousTurn[2]))
          dispatch(setStolenGiftTurnIndex(previousTurn[4])) 
        } else {
          dispatch(setLastGiftStolen(null))
          dispatch(setStolenGiftTurnIndex(null)) 
        }
      }
    }
  }

  return (
    <PlayersDisplayContainer>
      <GameLogoContainer>
        <GameLogo size={"small"}/>
      </GameLogoContainer>
      <GameHistoryContainer>
        <GameHistory history={gameHistory}/>
      </GameHistoryContainer>
      <BtnContainer onClick={() => handleUndo()}>
        <Btn label={"UNDO"} isActive={gameHistory.length !== 0}/>
      </BtnContainer>
      {turnIndex !== playerData.length ?
        <PlayerNamesContainer>
          {playerData.map((player) => (
            <PlayerContainer key={player.name} $isActive={player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name}>
                {player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name &&
                  <TurnIcon src={turnIcon} alt='turn icon' />
                }
                <h2>{player.name}</h2>  
                {player.name === playerData[stolenGiftTurnIndex === null ? turnIndex : stolenGiftTurnIndex].name &&
                  <TurnIcon src={turnIcon} alt='turn icon' />
                }
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
      <BtnContainer onClick={() => handleReset()}>
        <Btn label={"RESET GAME"} />
      </BtnContainer>
    </PlayersDisplayContainer>
  )
}
