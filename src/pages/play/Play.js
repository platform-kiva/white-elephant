import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectGameIsOver, selectGameIsStarted } from '../../store/game/game.selector';
import { resetGameState } from '../../store/game/game.action.js'
import { setCardImgsUploaded, setPresents } from '../../store/presents/presents.action.js';
import { clearPlayers } from '../../store/players/players.action.js';

// styles
import {
  PlayContainer
} from './Play.styles.js';

// components
import PlayersDisplay from '../../components/players-display/PlayersDisplay';
import PresentsDisplay from '../../components/presents-display/PresentsDisplay';

export default function Play() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameIsStarted = useSelector(selectGameIsStarted);
  const gameIsOver = useSelector(selectGameIsOver);

  useEffect(() => {
    if (!gameIsStarted) {
      dispatch(resetGameState());
      dispatch(setPresents([]));
      dispatch(clearPlayers());
      dispatch(setCardImgsUploaded(false));
      navigate("/");
    }
  }, [dispatch, navigate, gameIsStarted])

  useEffect(() => {
    if (gameIsOver) {
      navigate('/game-complete');
    }
  }, [navigate, gameIsOver])

  return (
    <PlayContainer>
      <PlayersDisplay />
      <PresentsDisplay />
    </PlayContainer >
  )
}
