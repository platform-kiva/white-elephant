// styles
import './LandingPage.scss';

// components
import GameLogo from '../../components/game-logo/GameLogo';
import PrimaryBtn from '../../components/primary-btn/PrimaryBtn'

export default function LandingPage() {
  return (
    <div className='landing-page-container'>
      <div className='game-logo-container'>
        <GameLogo />
        <PrimaryBtn label={"START"} navTo={"/shuffle-players"}/>
      </div>
    </div>
  )
}