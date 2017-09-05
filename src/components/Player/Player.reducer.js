
export const playerReducer = (state = {playersInfo: [], actualPlayerNumber : 0}, action) =>
{

    switch ( action.type )
    {
        case "ADD_PLAYER":
            let playerToAdd = {
                    name: action.payload.name,
                    isHuman: action.payload.isHuman,  
                    playing: false,
                    number : action.payload.order
            };
            state.playersInfo.push(playerToAdd);
        break;

        case "CHANGE_TO_NEXT_PLAYER":
            // action payload contains either -1 or number of player that we want
            // to play ( typically player 1 when we start the game )
            if (action.payload < 0)
            {
                if ( state.actualPlayerNumber === state.playersInfo.length )
                    state = {
                        ...state,
                        actualPlayerNumber: 1
                    };
                else
                    state = {
                        ...state,
                        actualPlayerNumber: state.actualPlayerNumber + 1
                    };
            }
            else
            {
                state = {
                    ...state,
                    actualPlayerNumber : action.payload
                }
            }

            state.playersInfo.forEach( (player,i) => { 
                    if (player.number === state.actualPlayerNumber) 
                        player.playing = true;
                    else
                        player.playing = false;
                }
            );
        break;

        default:
        break;

    }
    return state;
}
