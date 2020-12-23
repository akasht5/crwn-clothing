import ShopActionTypes from './shop.types'

const INITIALSTATE = {
    collections : null
}

const shopReducer = (state = INITIALSTATE,action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS : return {
            ...state,
            collections : action.payload
        };
        default:
            return state
    }
}

export default shopReducer
