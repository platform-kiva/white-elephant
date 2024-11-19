import { useSelector } from 'react-redux';
import { selectShuffleStatus } from '../../store/game/game.selector.js'
import { fadeInUp } from '../../animations/Animations.js';
import { motion } from 'framer-motion';

// styles
import { LandingPageContainer, GameLogoContainer } from './LandingPage.styles.js';

// components
import Btn from '../../components/btn/Btn'
import GameLogo from '../../components/game-logo/GameLogo';

export default function LandingPage() {
  const shuffleStatus = useSelector(selectShuffleStatus);

  return (
    <LandingPageContainer>
      <GameLogoContainer>
        <GameLogo size={"regular"} />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6 * 0.05}
          style={{ width: "100%" }}
        >
          <Btn
            label={shuffleStatus ? "RESUME" : "START"}
            navTo={"/add-players"}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={4 * 0.05}
          style={{ width: "100%" }}
        >
          <Btn label={"RULES"} navTo={"/rules"} />
        </motion.div>
      </GameLogoContainer>
    </LandingPageContainer>
  )
}