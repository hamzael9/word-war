
export const addPlayerAction = (name, number, isHuman) =>
    {
        return { type: "ADD_PLAYER", payload: { name, number, isHuman } } ;
    }

export const changeToNextPlayerAction = () =>
    {
        return { type : "CHANGE_TO_NEXT_PLAYER" };
    }