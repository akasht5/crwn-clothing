import { CartActionTypes } from './cart.types'
import { addToCartItems } from './cart.utils'

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const CartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_ITEM : 
            return {
                ...state,
                cartItems : addToCartItems(state.cartItems,action.payload)
            }
            default : 
                return state
    }
}

export default CartReducer 