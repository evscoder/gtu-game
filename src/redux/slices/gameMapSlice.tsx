import {createSlice} from '@reduxjs/toolkit';

type gameMapSliceProps = {
    nextStatus: boolean,
}

const initialState: gameMapSliceProps = {
    nextStatus: false
};

const gameMapSlice = createSlice({
    name: 'gameMapSlice',
    initialState: initialState,
    reducers: {
        nextLevel: (state, { payload }) => {
            state.nextStatus = payload;
        }
    }
});

export const { nextLevel } = gameMapSlice.actions;
export default gameMapSlice.reducer;
