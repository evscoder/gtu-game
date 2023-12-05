import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSagas from "../saga";
import gameMapSlice from "./slices/gameMapSlice";
import ratingSlice from "./slices/ratingSlice";
import friendsSlice from "./slices/friendsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        gameMapSlice,
        ratingSlice,
        friendsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;

