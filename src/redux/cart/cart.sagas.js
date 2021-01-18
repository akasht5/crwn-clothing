import { takeLatest,put,all,call }  from 'redux-saga/effects'
import UserActionTypes from '../user/user.types'
import { clearCartItems } from './cart.actions'

export function* clearCart(){
    yield put(clearCartItems());
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCart);
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}
