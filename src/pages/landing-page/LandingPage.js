import { useSelector } from 'react-redux';
import { selectShuffleStatus } from '../../store/game/game.selector.js'

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
        <GameLogo size={"regular"}/>
        <Btn label={shuffleStatus ? "RESUME" : "START"} navTo={"/add-players"}/>
        <Btn label={"RULES"} navTo={"/rules"}/>
      </GameLogoContainer>
    </LandingPageContainer>
  )
}