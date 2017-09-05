

export const wordInputReducer = (state = [{playerNumber: 1, wordList: []}] , action) =>
{

    switch (action.type)
    {
        case "ADD_WORD_TO_LIST":
            console.log (action);
            let added = false;
            for ( let element of state )
            {
                if ( element.playerNumber === action.payload.playerNumber )
                {
                    element.wordList.push(action.payload.word);
                    added = true;
                }
            }
            if (!added)
                state.push({ playerNumber: action.payload.playerNumber , wordList: [action.payload.word] });
            break;
    }
    return state;
};