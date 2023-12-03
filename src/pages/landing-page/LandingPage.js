// styles
import { LandingPageContainer, GameLogoContainer } from './LandingPage.styles.js';

// components
import Btn from '../../components/btn/Btn'
import GameLogo from '../../components/game-logo/GameLogo';

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <GameLogoContainer>
        <GameLogo size={"regular"}/>
        <Btn label={"START"} navTo={"/shuffle-players"}/>
      </GameLogoContainer>
    </LandingPageContainer>
  )
}