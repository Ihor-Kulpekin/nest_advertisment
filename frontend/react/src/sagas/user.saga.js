import { call, put, select } from "redux-saga/effects";
import {
  changePasswordFailure,
  changePasswordSuccess,
  loginUserFailed, loginUserSuccess,
  profileUserFailed,
  profileUserSuccess,
  registerUserFailed,
  registerUserSuccess
} from "../actions/user.action";
import { changePassword, loginUser, profileInfo, register } from "../api/user.api";

export function* createUserSaga({payload}) {
  try {
    const response = yield call(register, payload);

    if (response.error) {
      yield put(registerUserFailed(response.error))
    } else {
      yield put(registerUserSuccess(response))
    }
  } catch (error) {
    yield put(registerUserFailed(error))
  }
}

export function* userProfileSaga ({payload}) {
  try {
    const { token } = yield select((state) => state.user);
    const response = yield call(profileInfo, token);

      if (response.error) {
        yield put(profileUserFailed(response.error));
        payload.push('/login')
      } else {
        yield put(profileUserSuccess(response));
      }
    } catch (e) {
      yield put(profileUserFailed(e));
    }
}

export function* loginUserSaga ({payload}) {
  try {
    const {values, history, setShow} = payload
    const response = yield call(loginUser, values);

    if (response.error) {
      yield setShow(true)
      yield setTimeout(() => {
        setShow(false);
      }, 3000);

      yield put(loginUserFailed(response.error));
    } else {

      yield put(loginUserSuccess(response));
      yield history.push('/profile')
    }
  } catch (error) {
    yield put(loginUserFailed(error));
  }
}

export function* changePasswordSaga({payload}) {
  try {
    const { token } = yield select((state) => state.user);

    const {password, history} = payload;

    const response = yield call(changePassword, token, password);

    yield userProfileSaga({history});

    yield put(changePasswordSuccess(response))
  }catch (error) {
    yield put(changePasswordFailure(error))
  }
}
