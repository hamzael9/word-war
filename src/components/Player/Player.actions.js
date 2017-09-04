
export const addPlayerAction = (name, order, isHuman) =>
    {
        return { type: "ADD_PLAYER", payload: { name, order, isHuman } } ;
    }

export const changeToNextPlayerAction = () =>
    {
        return { type : "CHANGE_TO_NEXT_PLAYER" };
    }