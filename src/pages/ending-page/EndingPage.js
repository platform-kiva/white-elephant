import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/Animations';
import { selectGameIsOver } from '../../store/game/game.selector';
import { resetGameState, setGameIsStarted } from '../../store/game/game.action';
import { setCardImgsUploaded, setPresents } from '../../store/presents/presents.action';
import { clearPlayers } from '../../store/players/players.action';

// styles
import {
    EndingPageContainer,
    EndOfGameHeader,
    SummaryText,
    VenmoContainer,
    VenmoTag
} from './EndingPage.styles';

// assets
import venmoCode from '../../assets/venmo-code.png';

// components
import Btn from '../../components/btn/Btn';
import ContentContainer from '../../components/content-container/ContentContainer';
import GameLogo from '../../components/game-logo/GameLogo';
import PresentsDisplay from '../../components/presents-display/PresentsDisplay';

export default function EndingPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gameIsOver = useSelector(selectGameIsOver);

    const handleReset = () => {
        dispatch(resetGameState());
        dispatch(setPresents([]));
        dispatch(clearPlayers());
        dispatch(setCardImgsUploaded(false));
        dispatch(setGameIsStarted(false));
        navigate("/");
    }

    return (
        <EndingPageContainer $gameIsOver={gameIsOver}>
            <ContentContainer>
                <EndOfGameHeader>
                    <GameLogo size={"small"} />
                    <SummaryText
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        custom={1 * 0.1}>
                        <h1>Game Over!</h1>
                        <h3>Remember to take a screenshot of game results before clicking End Game, as all images and players will be promptly deleted.</h3>
                    </SummaryText>
                </EndOfGameHeader>
            </ContentContainer>
            <PresentsDisplay endOfGame={true}/>
            <ContentContainer>
                <EndOfGameHeader>
                    <motion.div
                        onClick={handleReset}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        custom={2 * 0.1}
                    >
                        <Btn label={'END GAME'} />
                    </motion.div>
                </EndOfGameHeader>
            </ContentContainer>
        </EndingPageContainer>
    )
}
