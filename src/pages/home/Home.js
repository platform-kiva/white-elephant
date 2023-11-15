import { Outlet } from 'react-router-dom'

// styles
import './Home.scss'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='outlet-container'>
        <Outlet />
      </div>
      <div className='background' />
    </div>
  )
}
