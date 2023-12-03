import { Outlet } from 'react-router-dom'
import Snowfall from 'react-snowfall'

// styles
import {
  HomeContainer,
  OutletContainer,
  Background
} from './Home.syled.js'

export default function Home() {
  return (
    <HomeContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Background>
        <Snowfall />
      </Background>
    </HomeContainer>
  )
}
