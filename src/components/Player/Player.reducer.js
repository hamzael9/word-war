
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
            state.playersInfo.forEach( (player,i) => { 
                if (player.number === state.actualPlayerNumber) 
                    player.playing = true;
                else
                    player.playing = false;
            } );
        break;

        default:
        break;

    }
    return state;
}
