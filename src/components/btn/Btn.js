import { useNavigate } from 'react-router-dom'

// styles
import {
  BtnContainer
} from './Btn.styles.js'

export default function Btn({ label, isActive=true, navTo=null }) {
  const navigate = useNavigate()

  const handleNav = (nav) => {
    if (isActive) {
      navigate(nav)
    }
  }
  return (
    <BtnContainer
      $isActive={isActive}
      onClick={() => handleNav(navTo)}
    >
        <h4>{label}</h4>
    </BtnContainer>
  )
}
