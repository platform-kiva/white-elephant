import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setLastGiftStolen, setStolenGiftTurnIndex, addGameHistory, setGameIsOver, setFirstPlayerReplayed, setSystemNotification } from '../../store/game/game.action';
import { setTurnIndex } from '../../store/game/game.action';
import { selectPlayerData } from '../../store/players/players.selector';
import { selectPresentData } from '../../store/presents/presents.selector';
import { selectGameHistory, selectLastGiftStolen, selectTurnIndex, selectFirstPlayerReplayed, selectGameIsOver, selectSystemNotification } from '../../store/game/game.selector';
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

export default function PresentsDisplay({ endOfGame = false }) {
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
  const systemNotification = useSelector(selectSystemNotification);

  useEffect(() => {
    if (!shuffleStatus) {
      navigate("/shuffle-players");
    };
  }, [shuffleStatus, navigate]);

  useEffect(() => {
    if ((turnIndex === playerData.length) && (lastGiftStolen === null) && !systemNotification) {
      dispatch(setFirstPlayerReplayed(true));
      dispatch(setTurnIndex(0));
      const notificationData = {
        text: "The first player gets to go last, or may end the game.",
        player1: null,
        player2: null,
        present1Name: null,
        present1Img: null,
        present2Name: null,
        present2Img: null,
        type: "message"
      }
      dispatch(setSystemNotification(notificationData))
    };
  }, [turnIndex, dispatch, playerData.length, lastGiftStolen, systemNotification]);

  const handleOpen = (playerID, presentID) => {
    dispatch(addGameHistory(gameHistory, [playerID, "opened", presentID]));
    const notificationData = {
      text: `${playerData[playerID].name} opened ${presentData[presentID].name}`,
      player1: `${playerData[playerID].name}`,
      player2: null,
      present1Name: `${presentData[presentID].name}`,
      present1Img: presentData[presentID].presentImg,
      present2Name: null,
      present2Img: null,
      type: "open"
    }
    dispatch(setSystemNotification(notificationData))
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
        const notificationData = {
          text: !firstPlayerReplayed ? `${playerData[thief].name} stole ${present.name} from ${playerData[victim].name}, who receives ${presentData[thief].name}. Now it is ${playerData[victim].name}'s turn to steal or open.` : `${playerData[thief].name} stole ${present.name} from ${playerData[victim].name}, who receives ${presentData[thief].name}. The game is now over.`,
          player1: `${playerData[thief].name}`,
          player2: `${playerData[victim].name}`,
          present1Name: `${present.name}`,
          present1Img: presentData[victim].presentImg,
          present2Name: `${presentData[thief].name}`,
          present2Img: presentData[thief].presentImg,
          type: "steal"
        }
        dispatch(setSystemNotification(notificationData));
        dispatch(addGameHistory(gameHistory, [thief, "stole", present.id, "from", victim]));
        dispatch(addPresentHistory(playerData, thief, present.id));
        dispatch(addOwnerHistory(presentData, present.id, thief, true));
        dispatch(setLastGiftStolen(present.id));
        dispatch(setStolenGiftTurnIndex(victim));

      } else {
        const notificationData = {
          text: "Present cannot be stolen any more times!",
          player1: null,
          player2: null,
          present1Name: null,
          present1Img: null,
          present2Name: null,
          present2Img: null,
          type: "message"
        }
        dispatch(setSystemNotification(notificationData));
      };
    } else {
      const notificationData = {
        text: "You cannot immediately steal back the same gift!",
        player1: null,
        player2: null,
        present1Name: null,
        present1Img: null,
        present2Name: null,
        present2Img: null,
        type: "message"
      }
      dispatch(setSystemNotification(notificationData));
    };
  };

  const handleSwap = (thief, stolenPresent) => {
    const thiefsPresent = playerData[thief].presentHistory[playerData[thief].presentHistory.length - 1];
    const victim = presentData[stolenPresent].ownerHistory[presentData[stolenPresent].ownerHistory.length - 1];
    const victimsPresent = playerData[victim].presentHistory[playerData[victim].presentHistory.length - 1];
    dispatch(addGameHistory(gameHistory, [thief, "stole", victimsPresent, "from", victim], [victim, "is given", thiefsPresent, "from", thief]));
    const notificationData = {
      text: !firstPlayerReplayed ? `${playerData[thief].name} stole ${presentData[stolenPresent].name} from ${playerData[victim].name}, who receives ${presentData[thiefsPresent].name}. Now it is ${playerData[victim].name}'s turn to steal or open.` : `${playerData[thief].name} stole ${presentData[stolenPresent].name} from ${playerData[victim].name}, who receives ${presentData[thiefsPresent].name}. The game is now over.`,
      player1: `${playerData[thief].name}`,
      player2: `${playerData[victim].name}`,
      present1Name: `${presentData[stolenPresent].name}`,
      present1Img: presentData[stolenPresent].presentImg,
      present2Name: `${presentData[thiefsPresent].name}`,
      present2Img: presentData[thiefsPresent].presentImg,
      type: "steal"
    }
    dispatch(setSystemNotification(notificationData));
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
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={index * 0.1}
        >
          <Present present={present} handleAction={handleAction} />
        </motion.div>
      ))}
    </PresentsDisplayContainer>
  )
}
