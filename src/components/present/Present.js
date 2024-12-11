import { useDispatch, useSelector } from 'react-redux'
import { selectPlayerData } from '../../store/players/players.selector.js'
import { selectGameIsOver, selectTurnIndex } from '../../store/game/game.selector.js'
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
    const gameIsOver = useSelector(selectGameIsOver);
    const playerData = useSelector(selectPlayerData);
    const turnIndex = useSelector(selectTurnIndex);

    const handleView = () => {
        const moveData = {
            text: present.name,
            player1Id: null,
            player2Id: null,
            present1Id: present.id,
            present2Id: null,
            type: "view"
        };
        dispatch(setSystemNotification(moveData));
    };

    return (
        <PresentContainer>
            {present.owner[present.owner.length - 1] !== null ? (
                <PresentOpened $bgCol={'255,255,255'}>
                    <PresentImgContainer>
                        <img src={present.presentImg} alt='present cover img' />
                    </PresentImgContainer>
                    <PresentInfo>
                        <h1>{present.name}</h1>
                        {!gameIsOver &&
                            <h2>Steals Left: {present.stealsLeft}</h2>
                        }
                    </PresentInfo>
                    <OwnerContainer>
                        <h2>{playerData[present.owner[present.owner.length - 1]].name}</h2>
                    </OwnerContainer>
                    <HoverButtons>
                        <button onClick={handleView}>VIEW</button>
                        {(!gameIsOver) && (present.owner[present.owner.length - 1] !== turnIndex) &&
                            <button onClick={() => handleAction(present.id)}>STEAL</button>
                        }
                    </HoverButtons>
                </PresentOpened>
            ) : (
                <div onClick={() => handleAction(present.id)}>
                    <PresentUnopened>
                        <img src={present.coverImg} alt="gift graphic" />
                        <HoverButtons>
                        </HoverButtons>
                    </PresentUnopened>
                </div>
            )}
        </PresentContainer>
    );
}