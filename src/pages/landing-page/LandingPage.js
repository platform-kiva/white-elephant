// styles
import './LandingPage.scss';

// components
import Btn from '../../components/btn/Btn'
import GameLogo from '../../components/game-logo/GameLogo';

export default function LandingPage() {
  return (
    <div className='landing-page-container'>
      <div className='game-logo-container'>
        <GameLogo size={"regular"}/>
        <Btn label={"START"} navTo={"/shuffle-players"}/>
      </div>
    </div>
  )
}