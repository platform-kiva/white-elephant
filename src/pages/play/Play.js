import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectGameIsOver } from '../../store/game/game.selector';
import { resetGameState } from '../../store/game/game.action.js'
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
import venmoLogo from '../../assets/venmo-logo.png';

// components
import Btn from '../../components/btn/Btn.js';
import GameLogo from '../../components/game-logo/GameLogo.js';
import PlayersDisplay from '../../components/players-display/PlayersDisplay';
import PresentsDisplay from '../../components/presents-display/PresentsDisplay';

export default function Play() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameIsOver = useSelector(selectGameIsOver);

  const handleReset = () => {
    dispatch(resetGameState());
    dispatch(setPresents([]));
    dispatch(clearPlayers());
    dispatch(setCardImgsUploaded(false));
    navigate("/");
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
        <ContentContainer>
          <EndOfGameHeader>
            <GameLogo size={"regular"} />
            <VenmoContainer
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1 * 0.1}
            >
              <motion.a
                href={"https://www.venmo.com/u/presence-exp"}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={3 * 0.1}
              >
                <VenmoTag src={venmoLogo} alt='Venmo: @presence-exp' />
              </motion.a>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={2 * 0.1}
              >
                We hope you enjoyed your experience, donations are greatly appreciated :)
              </motion.p>
            </VenmoContainer>
            <SummaryText
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2 * 0.1}>
              <h3>Game Summary</h3>
              <p>Remember to take a screenshot of game results before clickng End Game, as all images and players will be promptly deleted.</p>
            </SummaryText>
            <motion.div
              onClick={handleReset}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1 * 0.1}
            >
              <Btn label={'END GAME'} />
            </motion.div>
            <PresentsDisplay />
          </EndOfGameHeader>
        </ContentContainer>
      }
    </PlayContainer>
  )
}
