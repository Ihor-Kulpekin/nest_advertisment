import {all, debounce, takeLatest} from 'redux-saga/effects';
import { ActionsTypes } from "../constants/constants";
import {
  createAdvertisimentSaga,
  getAdvertisimentSaga,
  getAdvertisimentsSaga,
  updateAdvertisimentSaga
} from "./advertisimentSaga.saga";

export function* rootSaga() {
  yield all([
    yield debounce(500, ActionsTypes.GET_ADVERTISIMENTS_REQUEST, getAdvertisimentsSaga),
    yield takeLatest(ActionsTypes.GET_ADVERTISIMENT_REQUEST, getAdvertisimentSaga),
    yield takeLatest(ActionsTypes.CREATE_ADVERTISIMENT_REQUEST, createAdvertisimentSaga),
    yield takeLatest(ActionsTypes.UPDATE_ADVERTISIMENT_REQUEST, updateAdvertisimentSaga),
  ])
}
