import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Snowfall from 'react-snowfall';
import { selectCardImgsUploaded, selectPresentData } from '../../store/presents/presents.selector.js';

// styles
import {
  HomeContainer,
  OutletContainer,
  Background,
  ImgContainer,
  PresentImg
} from './Home.styles.js';

export default function Home() {
  const presentData = useSelector(selectPresentData);
  const cardImgsUploaded = useSelector(selectCardImgsUploaded);

  return (
    <HomeContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Background>
        <Snowfall />
      </Background>
      {cardImgsUploaded &&
        <ImgContainer>
          {presentData.map((present) => {
            return <PresentImg src={present.presentImg} />
          })}
        </ImgContainer>
      }

    </HomeContainer>
  )
}
