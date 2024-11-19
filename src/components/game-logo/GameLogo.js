// styles
import {
  ContentContainer,
  WhiteElephantIcon,

} from './GameLogo.styles.js'

// assets
import whiteElephantIcon from '../../assets/white-elephant-icon.png';

export default function GameLogo({ size }) {
  return (
    <ContentContainer>
      <h1>White Elephant</h1>
      <WhiteElephantIcon $size={size} src={whiteElephantIcon} alt='white elephant icon' />
    </ContentContainer>
  )
}
