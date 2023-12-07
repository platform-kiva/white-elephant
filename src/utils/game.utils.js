import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { PLAYER_DATA } from "../data/player_data";
import { PRESENT_DATA } from "../data/present_data";

export const resetGame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // reset game state
    dispatch(resetGameState());

    // reset players state
    dispatch(resetPlayersState(PLAYER_DATA));

    // reset presents state
    dispatch(resetPresentsState(PRESENT_DATA));

    navigate("/")
}