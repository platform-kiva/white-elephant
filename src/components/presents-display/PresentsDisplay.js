import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setLastGiftStolen, setStolenGiftTurnIndex, addGameHistory, setGameIsOver, setFirstPlayerReplayed, setPresentOverlay, setSystemNotification } from '../../store/game/game.action';
import { setTurnIndex } from '../../store/game/game.action';
import { selectPlayerData } from '../../store/players/players.selector';
import { selectPresentData } from '../../store/presents/presents.selector';
import { selectGameHistory, selectLastGiftStolen, selectTurnIndex, selectFirstPlayerReplayed, selectGameIsOver, selectPresentOverlay } from '../../store/game/game.selector';
import { selectStolenGiftTurnIndex } from '../../store/game/game.selector';
import { selectShuffleStatus } from '../../store/game/game.selector';
import { useNavigate } from 'react-router-dom';
import { addPresentHistory } from '../../store/players/players.action';
import { addOwnerHistory, swapOwners } from '../../store/presents/presents.action';
import { fadeInUp } from '../../animations/Animations.js';

// styles
import { PresentsDisplayContainer } from './PresentsDisplay.styles.js';

// components
import Present from '../present/Present';

export default function PresentsDisplay({ endOfGame=false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playerData = useSelector(selectPlayerData);
  const presentData = useSelector(selectPresentData);
  const turnIndex = useSelector(selectTurnIndex);
  const stolenGiftTurnIndex = useSelector(selectStolenGiftTurnIndex);
  const lastGiftStolen = useSelector(selectLastGiftStolen);
  const shuffleStatus = useSelector(selectShuffleStatus);
  const gameHistory = useSelector(selectGameHistory);
  const firstPlayerReplayed = useSelector(selectFirstPlayerReplayed);
  const gameIsOver = useSelector(selectGameIsOver);
  const presentOverlay = useSelector(selectPresentOverlay);

  useEffect(() => {
    if (!shuffleStatus) {
      navigate("/shuffle-players");
    };
  }, [shuffleStatus, navigate]);

  useEffect(() => {
    if ((turnIndex === playerData.length) && (lastGiftStolen === null) && !presentOverlay) {
      dispatch(setFirstPlayerReplayed(true));
      dispatch(setTurnIndex(0));
      dispatch(setPresentOverlay("The first player gets to go last, or may end the game."))
    };
  }, [turnIndex, dispatch, playerData.length, lastGiftStolen, presentOverlay]);

  const handleOpen = (playerID, presentID) => {
    dispatch(addGameHistory(gameHistory, [playerID, "opened", presentID]));
    dispatch(setPresentOverlay(`${playerData[playerID].name} opened ${presentData[presentID].name}`, presentData[presentID].presentImg))
    dispatch(addPresentHistory(playerData, playerID, presentID));
    dispatch(addOwnerHistory(presentData, presentID, playerID, false));
    dispatch(setLastGiftStolen(null));
    dispatch(setStolenGiftTurnIndex(null));

    if (firstPlayerReplayed) {
      dispatch(setGameIsOver());
      dispatch(setTurnIndex(playerData.length));
    } else {
      dispatch(setTurnIndex(turnIndex + 1));
    };
  };

  const handleSteal = (thief, victim, present) => {
    if (present.id !== lastGiftStolen) {
      if (present.stealsLeft !== 0) {
        dispatch(setPresentOverlay(`${playerData[thief].name} stole ${present.name} from ${playerData[victim].name}, who receives ${presentData[thief].name}`));
        dispatch(addGameHistory(gameHistory, [thief, "stole", present.id, "from", victim]));
        dispatch(addPresentHistory(playerData, thief, present.id));
        dispatch(addOwnerHistory(presentData, present.id, thief, true));
        dispatch(setLastGiftStolen(present.id));
        dispatch(setStolenGiftTurnIndex(victim));
        
      } else {
        dispatch(setSystemNotification("Present cannot be stolen any more times!"));
      };
    } else {
      dispatch(setSystemNotification("You cannot immediately steal back the same gift!"));
    };
  };

  const handleSwap = (thief, stolenPresent) => {
    const thiefsPresent = playerData[thief].presentHistory[playerData[thief].presentHistory.length - 1];
    const victim = presentData[stolenPresent].ownerHistory[presentData[stolenPresent].ownerHistory.length - 1];
    const victimsPresent = playerData[victim].presentHistory[playerData[victim].presentHistory.length - 1];
    dispatch(addGameHistory(gameHistory, [thief, "stole", victimsPresent, "from", victim], [victim, "is given", thiefsPresent, "from", thief]));
    dispatch(setSystemNotification(`${playerData[thief].name} stole ${presentData[stolenPresent].name} from ${playerData[victim].name}, who receives ${presentData[thiefsPresent].name}`));
    dispatch(swapOwners(presentData, thief, victim, thiefsPresent, victimsPresent));
    dispatch(setGameIsOver());
  };

  const handleAction = (presentID) => {
    if (gameIsOver) {
      return;
    }
    let player = null
    const present = presentData[presentID];
    console.log("present: ", present)
    if (stolenGiftTurnIndex === null) {
      player = playerData[turnIndex].id;
    } else {
      player = playerData[stolenGiftTurnIndex].id;
    }
    if (present.ownerHistory.length === 0) {
      handleOpen(player, present.id);
    } else {
      if (!firstPlayerReplayed) {
        handleSteal(player, present.ownerHistory[present.ownerHistory.length - 1], present);
      } else {
        handleSwap(player, presentID);
      }
    }
  }

  return (
    <PresentsDisplayContainer $endOfGame={endOfGame}>
      {presentData.map((present, index) => (
          <motion.div
            key={index}
            onClick={() => handleAction(present.id)}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={index * 0.1}
          >
            <Present present={present} ownerName={present.ownerHistory} />
          </motion.div>
      ))}
    </PresentsDisplayContainer>
  )
}
