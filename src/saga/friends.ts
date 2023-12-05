import {call, put} from "redux-saga/effects";
import getFriendsRequest from "../api/friends/friends";
import {getFriendsPending, getFriendsSuccess} from "../redux/slices/friendsSlice";

function* getFriendsSaga(): any {
    const payload = yield call(getFriendsRequest);

    yield put(getFriendsPending());
    yield put(getFriendsSuccess(payload));
}

export {
    getFriendsSaga
}
