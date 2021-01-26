import { takeEvery,call,all,put } from 'redux-saga/effects'
import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions'
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}
    
export function* onFetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}

export function* shopSagas(){
    yield all([call(onFetchCollectionsStart)]);
}



