import {createAction, createSlice} from '@reduxjs/toolkit';
import {RatingProps} from "../../types/types";
import {GET_RATING} from "../constants/constants";

type ratingSlice = {
    rating: RatingProps[],
    error: null | boolean,
    loading?: null | boolean,
    ratingShow: boolean
}

const initialState: ratingSlice = {
    rating: [],
    loading: true,
    error: null,
    ratingShow: false
};

const ratingSlice = createSlice({
    name: 'ratingSlice',
    initialState: initialState,
    reducers: {
        showRating: (state, { payload }) => {
            state.ratingShow = payload;
        },
        closeRating: (state) => {
            state.ratingShow = false;
        },
        getRatingSuccess: (state, action) => {
            const newData = action.payload.data.sort((a: any, b: any) => b.points - a.points);

            state.rating = [...state.rating, ...newData];
        }
    }
});

export const getRating = createAction(GET_RATING);
export const { showRating, closeRating, getRatingSuccess } = ratingSlice.actions;

export default ratingSlice.reducer;
