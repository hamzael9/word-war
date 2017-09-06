

export const appReducer = (state = {}, action) =>
{

    switch (action.type)
    {

        case "INIT_GAME":
            state = {
                gameInitiated : true,
                gameStarted: false,
                gameFinished: true
            };
            break;

        case "START_GAME":
            state = {
                gameInitiated: true,
                gameStarted : true,
                gameFinished: false,
                gameStartTime: action.payload
            };
            break;

        case "FINISH_GAME":
            state = {
                gameInitiated: true,
                gameStarted : false,
                gameFinished: true,
                gameFinishTime: action.payload
            };
            break;

        default:
            break;

    }

    return state;

}