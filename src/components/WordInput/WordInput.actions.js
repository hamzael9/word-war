

export const addWordToListAction = (word, playerNumber) =>
{
    return {
        type : "ADD_WORD_TO_LIST",
        payload : { word, playerNumber }
    };
};