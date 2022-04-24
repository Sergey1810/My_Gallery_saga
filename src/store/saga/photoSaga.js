import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {getPhotoSuccess} from "../photoSlise";

function* workGetPhotoFetch(){
    try {
        const photo = yield call(()=> axios.get('https://jsonplaceholder.typicode.com/albums/1/photos'))
        const photoShortened = photo.data.slice(0,24);
        yield put(getPhotoSuccess(photoShortened))
    }catch (e){
        console.log(e)
    }

}

function* photoSaga(){
    yield takeEvery('photo/getPhotoFetch', workGetPhotoFetch)
}
export default photoSaga;