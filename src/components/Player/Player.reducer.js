
export const playerReducer = (state = {players: [], playingTurn : 1}, action) =>
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
            if ( state.playingTurn === state.players.length )
                state.playingTurn = 1;
            else
                state.playingTurn += 1;
            state.players.forEach( (player,i) => { 
                if (player.number === state.playingTurn) player.playing = true;
                else player.playing = false;
            } );
        break;

        default:
        break;

    }
    return state;
}
