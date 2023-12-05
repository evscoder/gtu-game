import {call, put} from "redux-saga/effects";
import getRatingRequest from "../api/rating/rating";
import {getRatingSuccess} from "../redux/slices/ratingSlice";

function* getRatingSaga(): any {
    const payload = yield call(getRatingRequest);

    yield put(getRatingSuccess(payload));
}

export {
    getRatingSaga
}
