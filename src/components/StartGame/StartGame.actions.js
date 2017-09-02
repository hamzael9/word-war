

export const startGameAction = () =>
{
    return { type: 'START_GAME', payload: Date.now() }
}

export const stopGameAction = () =>
{
    return { type: 'STOP_GAME', payload: Date.now() }
}
