import {combineReducers} from 'redux'
import TshirtReducer from './TshirtReducer'
import CartReducer from './CartReducer'

export default combineReducers({
    tshirts: TshirtReducer,
    cart: CartReducer
})
