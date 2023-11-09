import { Outlet } from 'react-router-dom'

// styles
import './Home.scss'

export default function Home() {

  const handleAction = (action) => {
    console.log(action);
  }
  return (
    <div className='home-container'>
        <div className='home-header-container'>
            <h1>White Elephant</h1>
            <div className='action-btns-container'>
              <button onClick={() => handleAction('steal')}>STEAL</button>
              <button onClick={() => handleAction('open')}>OPEN</button>
            </div>
        </div>
        <Outlet />
    </div>
  )
}
