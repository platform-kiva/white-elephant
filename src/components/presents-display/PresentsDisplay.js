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
      const moveData = {
        text: "The first player gets to go last, or may end the game.",
        player1Id: null,
        player2Id: null,
        present1Id: null,
        present2Id: null,
        type: "message"
      }
      dispatch(setSystemNotification(moveData))
    };
  }, [turnIndex, dispatch, playerData.length, lastGiftStolen, systemNotification]);

  const handleOpen = (playerID, presentID) => {
    const moveData = {
      text: `${playerData[playerID].name} opened ${presentData[presentID].name}`,
      player1Id: playerID,
      player2Id: null,
      present1Id: presentID,
      present2Id: null,
      type: "open"
    }
    dispatch(addGameHistory(gameHistory, moveData));
    dispatch(setSystemNotification(moveData))
    dispatch(addPresentHistory(playerData, moveData));
    dispatch(addOwnerHistory(presentData, moveData));
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
      let moveData = {}
      if (present.stealsLeft !== 0) {
        if (playerData[thief].presentHistory.length !== 0) {
          // swap occurs
          moveData = {
            text: `${playerData[thief].name} stole ${present.name} from ${playerData[victim].name}, who receives ${playerData[thief].presentHistory[playerData[thief].presentHistory.length - 1]}. Now it is ${playerData[victim].name}'s turn to steal or open.`,
            player1Id: thief,
            player2Id: victim,
            present1Id: present.id,
            present2Id: presentData[thief].ownerHistory[presentData[thief].ownerHistory.length - 1],
            type: "steal"
          }
          dispatch(setSystemNotification(moveData));
        } else {
          // no swap occurs
          moveData = {
            text: `${playerData[thief].name} stole ${present.name} from ${playerData[victim].name}. Now it is ${playerData[victim].name}'s turn to steal or open.`,
            player1Id: thief,
            player2Id: victim,
            present1Id: null,
            present2Id: present.id,
            type: "steal"
          }
          dispatch(setSystemNotification(moveData));
        }
        dispatch(addGameHistory(gameHistory, moveData));
        dispatch(addPresentHistory(playerData, moveData));
        dispatch(addOwnerHistory(presentData, moveData));
        dispatch(setLastGiftStolen(present.id));
        dispatch(setStolenGiftTurnIndex(victim));

      } else {
        const moveData = {
          text: "Present cannot be stolen any more times!",
          player1Id: null,
          player2Id: null,
          present1Id: null,
          present2Id: null,
          type: "message"
        }
        dispatch(setSystemNotification(moveData));
      };
    } else {
      const moveData = {
        text: "You cannot immediately steal back the same gift!",
        player1Id: null,
        player2Id: null,
        present1Id: null,
        present2Id: null,
        type: "message"
      }
      dispatch(setSystemNotification(moveData));
    };
  };

  const handleSwap = (thief, stolenPresent) => {
    const thiefsPresent = playerData[thief].presentHistory[playerData[thief].presentHistory.length - 1];
    const victim = presentData[stolenPresent].ownerHistory[presentData[stolenPresent].ownerHistory.length - 1];
    const victimsPresent = playerData[victim].presentHistory[playerData[victim].presentHistory.length - 1];
    const moveData = {
      text: `${playerData[thief].name} stole ${presentData[stolenPresent].name} from ${playerData[victim].name}, who receives ${presentData[thiefsPresent].name}. The game is now over.`,
      player1Id: thief,
      player2Id: victim,
      present1Id: thiefsPresent,
      present2Id: victimsPresent,
      type: "steal"
    }
    dispatch(addGameHistory(gameHistory, moveData));
    dispatch(setSystemNotification(moveData));
    dispatch(swapOwners(presentData, thief, victim, thiefsPresent, victimsPresent));
    dispatch(setGameIsOver());
  };

  const handleAction = (presentID) => {
    if (gameIsOver) {
      return;
    }
    let player = null
    const present = presentData[presentID];
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
