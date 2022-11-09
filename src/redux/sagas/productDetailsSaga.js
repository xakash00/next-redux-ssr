import { takeLatest } from "redux-saga/effects"


export function* productDetailWorker(action){
    console.log(action)
}
export function* watchProductDetailsWorker(){
    yield takeLatest()
}