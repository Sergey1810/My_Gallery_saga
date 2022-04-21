import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import photoReducer from './photoSlise'
import photoSaga from "./saga/photoSaga";

const saga = createSagaMiddleware()
export default configureStore({
    reducer: {
        photo: photoReducer
    },
    middleware:[saga]
});
saga.run(photoSaga)