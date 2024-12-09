import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fadeInUp } from '../../animations/Animations.js';
import { resetGameState } from '../../store/game/game.action.js';
import { selectShuffleStatus } from '../../store/game/game.selector.js'
import { clearPlayers } from '../../store/players/players.action.js';
import { resetPresentsState } from '../../store/presents/presents.action.js';

// styles
import {
  LandingPageContainer,
  GameLogoContainer,
  BtnContainer
} from './LandingPage.styles.js';

// components
import Btn from '../../components/btn/Btn';
import GameLogo from '../../components/game-logo/GameLogo';

export default function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shuffleStatus = useSelector(selectShuffleStatus);

  useEffect(() => {
    dispatch(resetGameState());
  }, [dispatch])

  useEffect(() => {
    if (shuffleStatus) {
      dispatch(resetGameState);
      dispatch(clearPlayers());
      dispatch(resetPresentsState());
      navigate('/');
    }
  }, [dispatch, navigate, shuffleStatus])

  return (
    <LandingPageContainer>
      <GameLogoContainer>
        <GameLogo size={"regular"} />
        <BtnContainer
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={4 * 0.05}
        >
          <Btn
            label={"START"}
            navTo={"/add-players"}
          />
        </BtnContainer>
        <BtnContainer
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6 * 0.05}
        >
          <Btn label={"RULES"} navTo={"/rules"} />
        </BtnContainer>
      </GameLogoContainer>
    </LandingPageContainer>
  )
}