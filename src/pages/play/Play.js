import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectGameIsOver, selectGameIsStarted } from '../../store/game/game.selector';
import { resetGameState, setGameIsStarted } from '../../store/game/game.action.js'
import { setCardImgsUploaded, setPresents } from '../../store/presents/presents.action.js';
import { clearPlayers } from '../../store/players/players.action.js';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/Animations.js';

// styles
import {
  PlayContainer,
  ContentContainer,
  EndOfGameHeader,
  VenmoContainer,
  VenmoTag,
  SummaryText
} from './Play.styles.js';

// assets
import venmoCode from '../../assets/venmo-code.png';

// components
import Btn from '../../components/btn/Btn.js';
import GameLogo from '../../components/game-logo/GameLogo.js';
import PlayersDisplay from '../../components/players-display/PlayersDisplay';
import PresentsDisplay from '../../components/presents-display/PresentsDisplay';
import { useEffect } from 'react';

export default function Play() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameIsOver = useSelector(selectGameIsOver);
  const gameIsStarted = useSelector(selectGameIsStarted);


  const handleReset = () => {
    dispatch(resetGameState());
    dispatch(setPresents([]));
    dispatch(clearPlayers());
    dispatch(setCardImgsUploaded(false));
    dispatch(setGameIsStarted(false));
    navigate("/");
  }

  useEffect(() => {
    if (!gameIsStarted) {
      dispatch(resetGameState());
      dispatch(setPresents([]));
      dispatch(clearPlayers());
      dispatch(setCardImgsUploaded(false));
      navigate("/");
    }
  }, [dispatch, navigate, gameIsStarted])


  return (
    <PlayContainer $gameIsOver={gameIsOver} >
      {!gameIsOver &&
        <PlayersDisplay />
      }
      {gameIsOver &&
        <ContentContainer>
          <EndOfGameHeader>
            <GameLogo size={"regular"} />
            <SummaryText
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1 * 0.1}>
              <h3>Game Summary</h3>
              <p>Remember to take a screenshot of game results before clickng End Game, as all images and players will be promptly deleted.</p>
            </SummaryText>
          </EndOfGameHeader>
        </ContentContainer>
      }
      <PresentsDisplay />
      {gameIsOver &&
        <ContentContainer>
          <EndOfGameHeader>
            <motion.div
              onClick={handleReset}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2 * 0.1}
            >
              <Btn label={'END GAME'} />
            </motion.div>
            <VenmoContainer
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3 * 0.1}
            >
              <motion.a
                href={"https://www.venmo.com/u/presence-exp"}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={4 * 0.1}
              >
                <VenmoTag src={venmoCode} alt='Venmo: @presence-exp' />
              </motion.a>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={5 * 0.1}
              >
                We hope you enjoyed your experience, donations are greatly appreciated :)
              </motion.p>
            </VenmoContainer>
          </EndOfGameHeader>
        </ContentContainer>
      }
    </PlayContainer >
  )
}
