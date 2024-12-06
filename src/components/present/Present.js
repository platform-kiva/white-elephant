import { useDispatch, useSelector } from 'react-redux'
import { selectPlayerData } from '../../store/players/players.selector.js'
import { selectGameIsOver } from '../../store/game/game.selector.js'
import { setSystemNotification } from '../../store/game/game.action.js';

// styles
import {
    OwnerContainer,
    PresentContainer,
    PresentImgContainer,
    PresentInfo,
    PresentOpened,
    PresentUnopened,
    HoverButtons
} from './Present.styles.js';

export default function Present({ present, handleAction }) {
    const dispatch = useDispatch();
    const playerData = useSelector(selectPlayerData);
    const gameIsOver = useSelector(selectGameIsOver);

    const handleView = () => {
        const notificationData = {
            text: present.name,
            player1: null,
            player2: null,
            present1Name: null,
            present1Img: present.presentImg,
            present2Name: null,
            present2Img: null,
            type: "view"
          }
        dispatch(setSystemNotification(notificationData))
    }


    return (
        <PresentContainer>
            {present.ownerHistory.length !== 0 ? (
                <PresentOpened $bgCol={'255,255,255'}>
                    <PresentImgContainer>
                        <img src={present.presentImg} alt='present cover img' />
                    </PresentImgContainer>
                    <PresentInfo>
                        <h1>{present.name}</h1>
                        {!gameIsOver && <h2>Steals Left: {present.stealsLeft}</h2>}
                    </PresentInfo>
                    <OwnerContainer>
                        <h2>
                            {
                                playerData[present.ownerHistory[present.ownerHistory.length - 1]]
                                    .name
                            }
                        </h2>
                    </OwnerContainer>
                    <HoverButtons>
                        <button onClick={handleView}>VIEW</button>
                        <button onClick={() => handleAction(present.id)}>STEAL</button>
                    </HoverButtons>
                </PresentOpened>
            ) : (
                <PresentUnopened>
                    <img src={present.coverImg} alt="gift graphic" />
                    <HoverButtons>
                        <button onClick={() => handleAction(present.id)}>OPEN</button>
                    </HoverButtons>
                </PresentUnopened>
            )}
        </PresentContainer>
    );
}