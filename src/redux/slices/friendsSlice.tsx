import {createAction, createSlice} from '@reduxjs/toolkit';
import {FriendsItemProps} from "../../types/types";
import {GET_FRIENDS} from "../constants/constants";

type friendsSliceProps = {
    friends: FriendsItemProps[],
    error: null | boolean,
    loading?: null | boolean,
    fulfilled: null | boolean
}

const initialState: friendsSliceProps = {
    friends: [],
    loading: null,
    fulfilled: null,
    error: null
};

const gameMapSlice = createSlice({
    name: 'friendsSlice',
    initialState: initialState,
    reducers: {
        getFriendsPending: (state) => {
            state.loading = true;
        },
        getFriendsSuccess: (state, { payload }) => {
            state.loading = false;
            state.fulfilled = true;
            state.friends = [...state.friends, ...payload.data];
        }
    }
});
export const getFriends = createAction(GET_FRIENDS);
export const { getFriendsPending, getFriendsSuccess } = gameMapSlice.actions;
export default gameMapSlice.reducer;
