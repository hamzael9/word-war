
export const addPlayerAction = (name, order, isHuman) =>
    {
        return { type: "ADD_PLAYER", payload: { name, order, isHuman } } ;
    }

export const changeToNextPlayerAction = (player_number = -1) =>
    {
        return { type : "CHANGE_TO_NEXT_PLAYER", payload: player_number };
    }