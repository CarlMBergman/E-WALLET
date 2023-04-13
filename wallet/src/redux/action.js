function addCard(value) {
    return {
        type: 'NEW-CARD',
        payload: value
    }
}

function setActive(value) {
    return {
        type: 'SET-ACTIVE', 
        payload: value
    }
}


export { addCard, setActive }