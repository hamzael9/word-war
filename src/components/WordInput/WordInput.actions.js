
export const addWordAction = (word, playerNumber) =>
{
    return {
        type : "ADD_WORD",
        payload : { word, playerNumber }
    };
};
