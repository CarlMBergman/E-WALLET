function addCard(value) {
    return {
        type: 'NEW-CARD',
        payload: value
    }
}

export { addCard }