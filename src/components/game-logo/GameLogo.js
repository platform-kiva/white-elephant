// styles
import {
  CompanyLogo,
  ContentContainer,
  WhiteElephantIcon,

} from './GameLogo.styles.js'

// assets
import companyLogo from '../../assets/HBO_logo.png';
import whiteElephantIcon from '../../assets/white-elephant-icon.png';

export default function GameLogo({ size }) {
  return (
    <ContentContainer>
      <CompanyLogo $size={size} src={companyLogo} alt='company logo' />
      <WhiteElephantIcon $size={size} src={whiteElephantIcon} alt='white elephant icon' />
    </ContentContainer>
  )
}
