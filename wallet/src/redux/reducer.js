const initialState = {
    cards: [
        {
            cardNum: "1572 9999 2034 6626",
            cardHolder: "MORGOTH BAUGLIR",
            valid: "15/24",
            ccv: "666",
            vendor: "evil",
            isActive: 'active'
        },
        {
            cardNum: "1573 9999 2034 6626",
            cardHolder: "BARBA DADDY",
            valid: "15/24",
            ccv: "336",
            vendor: "bitcoin",
            isActive: 'notActive'
        },
        {
            cardNum: "1472 9999 2034 6626",
            cardHolder: "CARL BERGMAN",
            valid: "15/24",
            ccv: "157",
            vendor: "blockchain",
            isActive: 'notActive'
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
        case 'SET-ACTIVE':
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (card.cardNum === action.payload) {
                        card.isActive = 'active'
                        return card
                    }
                    else {
                        card.isActive = 'notActive'
                        return card
                    }
                })
            }
    
        default:
            return state
    }
}

export default reducer