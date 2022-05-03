import { ActionsTypes } from "../constants/constants";

export const registerUserRequest = (payload) => ({
  type: ActionsTypes.REGISTER_USER_REQUEST,
  payload
})

export const registerUserSuccess = (payload) => ({
  type: ActionsTypes.REGISTER_USER_SUCCESS,
  payload
})

export const registerUserFailed = (payload) => ({
  type: ActionsTypes.REGISTER_USER_FAILED,
  payload
})

export const loginUserRequest = (payload) => ({
  type: ActionsTypes.LOGIN_USER_REQUEST,
  payload
})

export const loginUserSuccess = (payload) => ({
  type: ActionsTypes.LOGIN_USER_SUCCESS,
  payload
})

export const loginUserFailed = (payload) => ({
  type: ActionsTypes.LOGIN_USER_FAILED,
  payload
})

export const profileUserRequest = (payload) => ({
  type: ActionsTypes.PROFILE_USER_REQUEST,
  payload
})

export const profileUserSuccess = (payload) => ({
  type: ActionsTypes.PROFILE_USER_SUCCESS,
  payload
})

export const profileUserFailed = (payload) => ({
  type: ActionsTypes.PROFILE_USER_FAILED,
  payload
})

export const changePasswordRequest = (payload) => ({
  type: ActionsTypes.CHANGE_PASSWORD_REQUEST,
  payload
})

export const changePasswordSuccess = (payload) => ({
  type: ActionsTypes.CHANGE_PASSWORD_SUCCESS,
  payload
})

export const changePasswordFailure = (payload) => ({
  type: ActionsTypes.CHANGE_PASSWORD_FAILURE,
  payload
})
