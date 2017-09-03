
export const playerReducer = (state = {playingTurn : 0, players: []}, action) =>
{

    switch ( action.type )
    {
        case "ADD_PLAYER":
            let playerToAdd = {
                    name: action.payload.name,
                    isHuman: action.payload.isHuman,  
                    playing: false,
                    number : action.payload.number,
                    wordsList: [],
                    points: 0
            };
            state.players.push(playerToAdd);
        break;

        case "DELETE_PLAYER":
        break;

        case "CHANGE_TO_NEXT_PLAYER":
            //state.playingTurn = state.playingTurn + 1;
            state = {
                ...state,
                playingTurn : ++state.playingTurn
            }
            /*if ( state.playingTurn === state.players.length )
                state = {
                    ...state,
                    playingTurn : 1
                };
            else
                state = {
                    ...state,
                    playingTurn : state.playingTurn + 1
                };
            state.players.forEach( (player,i) => { 
                if (player.number === state.playingTurn) player.playing = true;
                else player.playing = false;
            } );*/
        break;

        default:
        break;

    }
    return state;
}
