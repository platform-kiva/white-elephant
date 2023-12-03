import { Outlet } from 'react-router-dom'
import Snowfall from 'react-snowfall'

// styles
import './Home.scss'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='outlet-container'>
        <Outlet />
      </div>
      <div className='background'>
        <Snowfall />
      </div>
    </div>
  )
}
