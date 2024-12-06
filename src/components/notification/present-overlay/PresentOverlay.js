import { useDispatch } from 'react-redux';
import { setPresentOverlay } from '../../../store/game/game.action';
import { fadeInUp } from '../../../animations/Animations';

// styles
import { PresentOverlayContainer, BtnContainer } from './PresentOverlay.styles';

// components
import Btn from '../../btn/Btn';

export default function PresentOverlay({ text, img }) {
    const dispatch = useDispatch();

    return (
        <PresentOverlayContainer
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
                <div onClick={() => dispatch(setPresentOverlay())} style={{ width: "100%" }}>
                    <Btn label={"CLOSE"} />
                </div>

            </BtnContainer>
        </PresentOverlayContainer >
    );
}