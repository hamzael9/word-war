

export const wordInputReducer = (state = [] , action) =>
{

    switch (action.type)
    {
        case "ADD_WORD_TO_LIST":
            console.log (action);
            let added = false;
            for ( let element of state )
            {
                if ( element.number === action.payload.playerNumber )
                {
                    element.wordList.push(action.payload.word);
                    added = true;
                }
            }
            if (!added)
                state.push({ number: action.payload.number , word: action.payload.word });
            break;
    }
    return state;
};