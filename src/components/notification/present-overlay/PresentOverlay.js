import { useDispatch } from 'react-redux';
import { setGameIsOver, setPresentOverlay } from '../../../store/game/game.action';
import { fadeInUp } from '../../../animations/Animations';

// styles
import { PresentOverlayContainer, BtnContainer } from './PresentOverlay.styles';

// components
import Btn from '../../btn/Btn';

export default function PresentOverlay({ text, img }) {
    const dispatch = useDispatch();

    const handleClose = (action) => {
        dispatch(setPresentOverlay());
        if (action === "end") {
            dispatch(setGameIsOver(true));
        }
    }

    return (
        <PresentOverlayContainer
            initial={{
                opacity: 0,
                transform: 'translate(-50%, -50%) translateY(-5px)',
            }}
            animate={{
                opacity: 1,
                transform: 'translate(-50%, -50%) translateY(0)',
            }}
            exit={{
                opacity: 0,
                transform: 'translate(-50%, -50%) translateY(-5px)',
            }}
            transition={{ duration: 0.2 }}
            className="panel-bg"
        >
            {img &&
                <img src={img} alt="present" />
            }
            <h3>{text}</h3>
            <BtnContainer
                style={{ display: "flex", gap: "8px" }}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={3 * 0.05}
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
        </PresentOverlayContainer >
    );
}