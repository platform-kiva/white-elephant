// styles
import './GameLogo.scss'

// assets
import companyLogo from '../../assets/HBO_logo.png';
import whiteElephantIcon from '../../assets/white-elephant-icon.png';

export default function GameLogo() {
  return (
    <div className='content-container'>
      <img className='company-logo' src={companyLogo} alt='company logo' />
      <img className='white-elephant-icon' src={whiteElephantIcon} alt='white elephant icon' />
    </div>
  )
}
