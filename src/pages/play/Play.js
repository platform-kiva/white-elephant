import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectGameIsOver } from '../../store/game/game.selector';
import { resetGameState } from '../../store/game/game.action.js';

// styles
import {
  PlayContainer,
  EndOfGameHeader
} from './Play.styles.js';

// components
import Btn from '../../components/btn/Btn.js';
import GameLogo from '../../components/game-logo/GameLogo.js';
import PlayersDisplay from '../../components/players-display/PlayersDisplay';
import PresentsDisplay from '../../components/presents-display/PresentsDisplay';

export default function Play() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameIsOver = useSelector(selectGameIsOver);

  const handleSoftReset = () => {
    dispatch(resetGameState());
    navigate("/shuffle-players");
  }

  return (
    <PlayContainer $gameIsOver={gameIsOver} >
      {!gameIsOver &&
        <>
          <PlayersDisplay />
          <PresentsDisplay />
        </>
      }
      {gameIsOver &&
        <EndOfGameHeader>
          <GameLogo size={"regular"} />
          <h2>Thanks for playing!</h2>
          <PresentsDisplay />
          <div onClick={handleSoftReset}>
            <Btn label={'RESET GAME'} />
          </div>
        </EndOfGameHeader>
      }
    </PlayContainer>
  )
}
