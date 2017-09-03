
export const playerReducer = (state = [], action) =>
{

    switch ( action.type )
    {
        case "ADD_PLAYER":
        state = {
            name: action.payload.name,
            isHuman: action.payload.isHuman,  
            playing: false,
            wordsList: [],
            points: 0
        };
        break;

        case "DELETE_PLAYER":

        break;

        case "CHANGE_PLAYER":
        break;

        default:
        break;

    }
    return state;
}
