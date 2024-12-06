import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { selectCardImgsUploaded, selectPresentData } from '../../store/presents/presents.selector.js';
import { selectSystemNotification } from '../../store/game/game.selector.js';

// styles
import {
  HomeContainer,
  OutletContainer,
  Background,
  ImgContainer,
  PresentImg
} from './Home.styles.js';

// components
import Notification from '../../components/notification/Notification.js';
import Snowfall from 'react-snowfall';

export default function Home() {
  const cardImgsUploaded = useSelector(selectCardImgsUploaded);
  const presentData = useSelector(selectPresentData);
  const systemNotification = useSelector(selectSystemNotification);

  return (
    <HomeContainer>
      <AnimatePresence>
        {systemNotification && <Notification text={systemNotification} key="notification" />}
      </AnimatePresence>

      <Background>
        <Snowfall />
      </Background>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      {cardImgsUploaded &&
        <ImgContainer>
          {presentData.map((present) => {
            return <PresentImg key={present.id} src={present.presentImg} />
          })}
        </ImgContainer>
      }
    </HomeContainer>
  )
};