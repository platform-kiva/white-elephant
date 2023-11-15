import { useNavigate } from 'react-router-dom'

// styles
import './PrimaryBtn.scss'

export default function PrimaryBtn({ label, isActive = true, navTo = null }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (isActive && navTo !== null) {
            navigate(navTo)
        }
    }
    return (
        <button onClick={() => handleClick()} className={`primary-btn-container ${isActive ? 'active' : 'inactive'}`} disabled={!isActive}>
            {label}
        </button>
    )
}
