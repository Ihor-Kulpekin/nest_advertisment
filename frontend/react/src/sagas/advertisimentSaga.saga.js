import {call, put} from 'redux-saga/effects';
import { createAdvertisiment, getAdvertisiment, getAdvertisiments, updateAdvertisiment as updateAdvertisimentApi } from "../api/advertisiment.api";
import {
  createAdvertisimentActionFailure,
  createAdvertisimentActionSuccess, getAdvertisimentActionFailure, getAdvertisimentActionSuccess,
  getAdvertisimentsActionFailure,
  getAdvertisimentsActionSuccess, updateAdvertisimentFailure, updateAdvertisimentSuccess
} from "../actions/advertisiment.action";

export function* getAdvertisimentSaga({payload}) {
  try {
    const result = yield call(getAdvertisiment, payload);

    yield put(getAdvertisimentActionSuccess(result))
  } catch (error) {
    yield put(getAdvertisimentActionFailure(error))
  }
}

export function* getAdvertisimentsSaga({payload}) {
  try {
    const result = yield call(getAdvertisiments, payload);

    yield put(getAdvertisimentsActionSuccess(result))
  } catch (error) {
    yield put(getAdvertisimentsActionFailure(error))
  }
}

export function* createAdvertisimentSaga ({payload}) {
  try {
    const result = yield call(createAdvertisiment, payload);

    if (result && result.errors) {
      yield put(createAdvertisimentActionFailure(result.errors))
    } else {
      yield put(createAdvertisimentActionSuccess(result))
    }
  } catch (error) {
    yield put(createAdvertisimentActionFailure(error))
  }
}

export function* updateAdvertisimentSaga ({payload}) {
  try {
    const result = yield call(updateAdvertisimentApi, payload)

    yield put(updateAdvertisimentSuccess(result))
  }catch (error) {
    yield put(updateAdvertisimentFailure(error))
  }
}
