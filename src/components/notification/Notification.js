import { useDispatch, useSelector } from 'react-redux';
import { setGameIsOver, setSystemNotification } from '../../store/game/game.action';
import { selectPresentData } from '../../store/presents/presents.selector';
import { selectPlayerData } from '../../store/players/players.selector';
import { fadeInUp } from '../../animations/Animations';

// styles
import {
  NotificationContainer,
  NotificationContent,
  NotificationText,
  StealDisplayContainer,
  StolenGoodsDisplay,
  StealIcon,
  BtnContainer
} from './Notification.styles';

// assets
import stealIcon from '../../assets/swap-icon.png';

// components
import Btn from '../btn/Btn';

export default function Notification({ notificationData }) {
  const dispatch = useDispatch();
  const { text, player1Id, player2Id, present1Id, present2Id, type } = notificationData;
  const playerData = useSelector(selectPlayerData);
  const presentData = useSelector(selectPresentData);

  const handleClose = (action) => {
    dispatch(setSystemNotification(null));
    if (action === "end") {
      dispatch(setGameIsOver(true));
    }
  }

  return (
    <NotificationContainer>
      <NotificationContent
        initial={{
          opacity: 0,
          transform: 'translate(-50%, -50%) translateY(-5px)', // Combine transforms here
        }}
        animate={{
          opacity: 1,
          transform: 'translate(-50%, -50%) translateY(0)', // Ensure centering is included
        }}
        exit={{
          opacity: 0,
          transform: 'translate(-50%, -50%) translateY(-5px)', // Include centering when exiting
        }}
        transition={{ duration: 0.2 }}
        className="panel-bg"
      >
        {((type === 'open') || (type === "view")) &&
          <img src={presentData[present1Id].presentImg} alt={"Present"} />
        }
        {type === 'steal' &&
          <StealDisplayContainer>
            <StolenGoodsDisplay>
              <img src={presentData[present2Id].presentImg} alt={"Present"} />
              <h3>{playerData[player1Id].name}</h3>
            </StolenGoodsDisplay>
            {present1Id !== null ?
              <StealIcon src={stealIcon} alt="steal icon" />
              :
              <h2>&#8592;</h2>
            }
            <StolenGoodsDisplay>
              {present1Id === null ?
                <div className='img-placeholder' />
                :
                <img src={presentData[present1Id].presentImg} alt={"Present"} />
              }
              <h3>{playerData[player2Id].name}</h3>
            </StolenGoodsDisplay>
          </StealDisplayContainer>
        }
        {text &&
          <NotificationText
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={4 * 0.05}
          >
            {text}
          </NotificationText>
        }
        <BtnContainer
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={6 * 0.05}
        >
          <div onClick={() => handleClose("continue")} style={{ width: "100%" }}>
            <Btn label={text === "The first player gets to go last, or may end the game." ? "TAKE TURN" : "CLOSE"} />
          </div>
          {text === "The first player gets to go last, or may end the game." &&
            <div onClick={() => handleClose("end")} style={{ width: "100%" }}>
              <Btn label={"END GAME"} />
            </div>
          }
        </BtnContainer>
      </NotificationContent>
    </NotificationContainer >
  );
}