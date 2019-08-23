
const initialState = { tshirts: [] };

export default function(state=initialState, action) {
    switch (action.type) {
        case "ADD-TO-CART" :
            return {
                tshirts: action.payload.cartItems  
            };
        case "REMOVE_FROM_CART": 
            return {
                tshirts:action.payload.cartItems
            };
        default:
            return state        
    }
}