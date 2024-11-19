import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

export const resetGame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // reset game state
    dispatch(resetGameState());

    // reset players state
    dispatch(resetPlayersState([]));

    // reset presents state
    dispatch(resetPresentsState([]));

    navigate("/")
}