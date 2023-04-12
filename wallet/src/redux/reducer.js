const initialState = {
    cards: [
        {
            cardNum: "1572 9999 2034 6626",
            cardHolder: "CARL BERGMAN",
            valid: "15/24",
            ccv: "666",
            vendor: "evil"
        },
        {
            cardNum: "1573 9999 2034 6626",
            cardHolder: "CARL BERGMAN",
            valid: "15/24",
            ccv: "666",
            vendor: "bitcoin"
        },
        {
            cardNum: "1472 9999 2034 6626",
            cardHolder: "CARL BERGMAN",
            valid: "15/24",
            ccv: "666",
            vendor: "blockchain"
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW-CARD':
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }
    
        default:
            return state
    }
}

export default reducer