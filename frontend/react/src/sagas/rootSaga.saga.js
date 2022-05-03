import {all, debounce, takeLatest, takeEvery} from 'redux-saga/effects';
import { ActionsTypes } from "../constants/constants";
import {
  createAdvertisimentSaga,
  getAdvertisimentSaga,
  getAdvertisimentsSaga,
  updateAdvertisimentSaga,
} from "./advertisimentSaga.saga";
import { changePasswordSaga, createUserSaga, loginUserSaga, userProfileSaga } from "./user.saga";

export function* rootSaga() {
  yield all([
    yield debounce(500, ActionsTypes.GET_ADVERTISIMENTS_REQUEST, getAdvertisimentsSaga),
    yield takeEvery(ActionsTypes.REGISTER_USER_REQUEST, createUserSaga),
    yield takeLatest(ActionsTypes.PROFILE_USER_REQUEST, userProfileSaga),
    yield takeLatest(ActionsTypes.GET_ADVERTISIMENT_REQUEST, getAdvertisimentSaga),
    yield takeLatest(ActionsTypes.CREATE_ADVERTISIMENT_REQUEST, createAdvertisimentSaga),
    yield takeLatest(ActionsTypes.LOGIN_USER_REQUEST, loginUserSaga),
    yield takeLatest(ActionsTypes.CHANGE_PASSWORD_REQUEST, changePasswordSaga),
    yield takeLatest(ActionsTypes.UPDATE_ADVERTISIMENT_REQUEST, updateAdvertisimentSaga),
  ])
}
