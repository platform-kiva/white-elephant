import { useNavigate } from 'react-router-dom';

// styles
import {
  BtnContainer
} from './Btn.styles.js'

export default function Btn({ label, isActive=true, navTo=null, isCritical = false }) {
  const navigate = useNavigate()

  const handleNav = (nav) => {
    if (isActive) {
      navigate(nav)
    }
  }
  return (
    <BtnContainer
      $isActive={isActive}
      $isCritical={isCritical}
      onClick={() => handleNav(navTo)}
    >
        <h4>{label}</h4>
    </BtnContainer>
  )
}
