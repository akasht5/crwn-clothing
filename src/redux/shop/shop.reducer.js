import ShopActionTypes from './shop.types'

const INITIALSTATE = {
    collections : null,
    isFetching : false,
    error_message : undefined
};

const shopReducer = (state = INITIALSTATE,action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START :
            return {
                ...state,
                isFetching : true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS :
            return {
                ...state,
                isFetching : false,
                collections : action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE :
            return {
                ...state,
                isFetching : false,
                error_message : action.payload
            }
        default:
            return state
    }  
}

export default shopReducer
