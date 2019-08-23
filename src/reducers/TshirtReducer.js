

const initialState = {tshirts: []};

export default function(state = initialState, action) {
    switch(action.type) {
        case "FETCH_TSHIRTS":
            return { ...state,
                tshirts:action.payload
            }
        default:
            return state;    
    }
}