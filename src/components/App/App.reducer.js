

export const appReducer = (state = {gameStarted : false}, action) =>
{
    console.log('accessing app reducer');
    switch (action.type)
    {
        case "START_GAME":
            state = {
                ... state,
                gameStarted : true,
                gameStartTime: action.payload
            };
            break;
        case 'STOP_GAME':
            state = {
                gameStarted : false,
                gameStopTime: action.payload
            }
            break;
        default:
            break;

    }

    return state;
}

