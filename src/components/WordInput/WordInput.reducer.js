

export const wordInputReducer = (state = [{playerNumber: 1, wordList: [], pointsEarned: 0, pointsLost: 0}] , action) =>
{

    switch (action.type)
    {
        case "ADD_WORD_TO_LIST":
            let added = false;
            let wordToAdd = action.payload.word;
            let pointsEarned = wordToAdd.length;
            for ( let element of state )
            {
                if ( element.playerNumber === action.payload.playerNumber )
                {
                    element.wordList.push(wordToAdd);
                    element.pointsEarned += pointsEarned;
                    added = true;
                }
            }
            if (!added)
                state.push({ playerNumber: action.payload.playerNumber , wordList: [wordToAdd], pointsEarned, pointsLost: 0});
            break;
        
        case "CLEAR_WORD_LISTS":
            state.forEach( (element) => element.wordList = [] );
            break;
    }
    return state;
};