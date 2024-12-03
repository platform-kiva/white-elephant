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

      <Background>
        <Snowfall />
      </Background>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
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