import Snowfall from 'react-snowfall';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  const cardImgsUploaded = useSelector(selectCardImgsUploaded);
  const presentData = useSelector(selectPresentData);

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
            return <PresentImg key={present.id }src={present.presentImg} />
          })}
        </ImgContainer>
      }
    </HomeContainer>
  )
};