
export const wordInputReducer = (state = {playerNumber: 0, wordToAdd: ''}, action) =>
{
    let new_state;
    switch (action.type)
    {
        case "ADD_WORD":
            
            let wordToAdd = action.payload.word;
            let playerNumber = action.payload.playerNumber;
            
            new_state = {playerNumber, word: wordToAdd}; 

            break;
        
        
        default:
            return state;
    }
    return new_state;
};