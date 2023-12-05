import {takeEvery} from 'redux-saga/effects';
import {getFriendsSaga} from "../saga/friends";
import {getRatingSaga} from "../saga/ratings";
import {GET_FRIENDS, GET_RATING} from "../redux/constants/constants";

function* rootSagas() {
    yield takeEvery(GET_FRIENDS, getFriendsSaga);
    yield takeEvery(GET_RATING, getRatingSaga);
}

export default rootSagas;
