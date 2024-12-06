import { useDispatch } from 'react-redux';
import { fadeInUp } from '../../animations/Animations';
import { setGameIsOver, setSystemNotification } from '../../store/game/game.action';

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
  const {
    text,
    player1,
    player2,
    present1Img,
    present2Img,
    type
  } = notificationData;

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
          <img src={present1Img} alt={"Present"} />
        }
        {type === 'steal' &&
          <StealDisplayContainer>
            <StolenGoodsDisplay>
              <img src={present1Img} alt={"Present"} />
              <h3>{player1}</h3>
            </StolenGoodsDisplay>
            <StealIcon src={stealIcon} alt="steal icon" />
            <StolenGoodsDisplay>
              <img src={present2Img} alt={"Present"} />
              <h3>{player2}</h3>
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