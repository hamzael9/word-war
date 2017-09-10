

const getEnglishLettersToPointsMap = () => {
    let lettersToPointsMap = new Map();
    lettersToPointsMap.set('e', 1);
    lettersToPointsMap.set('a', 1);
    lettersToPointsMap.set('r', 1);
    lettersToPointsMap.set('i', 1);
    lettersToPointsMap.set('o', 1);
    lettersToPointsMap.set('t', 1);
    lettersToPointsMap.set('n', 1);
    lettersToPointsMap.set('s', 1);
    lettersToPointsMap.set('l', 2);
    lettersToPointsMap.set('c', 2);
    lettersToPointsMap.set('u', 2);
    lettersToPointsMap.set('d', 2);
    lettersToPointsMap.set('p', 2);
    lettersToPointsMap.set('m', 3);
    lettersToPointsMap.set('h', 3);
    lettersToPointsMap.set('g', 3);
    lettersToPointsMap.set('b', 3);
    lettersToPointsMap.set('f', 4);
    lettersToPointsMap.set('y', 4);
    lettersToPointsMap.set('w', 4);
    lettersToPointsMap.set('k', 4);
    lettersToPointsMap.set('v', 4);
    lettersToPointsMap.set('x', 5);
    lettersToPointsMap.set('z', 5);
    lettersToPointsMap.set('j', 5);
    lettersToPointsMap.set('q', 5);

    return lettersToPointsMap;
}


const lettersToPointsMap = getEnglishLettersToPointsMap();


const calculatePointsEarned = (word) =>
{
    let points = 0;
    let letters = Array.from(word);

    letters.forEach( (l) =>
        {
            points += lettersToPointsMap.get(l);
        }
    );
    points *= 5;
    return points;
};

export const wordInputReducer = (state = {playerNumber: 0, wordToAdd: '', points: 0}, action) =>
{
    let new_state;
    switch (action.type)
    {
        case "ADD_WORD":

            let wordToAdd = action.payload.word;
            let playerNumber = action.payload.playerNumber;
            let points = calculatePointsEarned(wordToAdd);
            new_state = {playerNumber, word: wordToAdd, points: points}; 

            break;

        default:
            return state;
    }
    return new_state;
};