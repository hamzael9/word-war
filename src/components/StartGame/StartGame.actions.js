

export const initGameAction = () =>
{
    return { type: "INIT_GAME"};
}

export const startGameAction = () =>
{
    return { type: "START_GAME", payload: Date.now() }
}

export const finishGameAction = () =>
{
    return { type: "FINISH_GAME", payload: Date.now() }
}
