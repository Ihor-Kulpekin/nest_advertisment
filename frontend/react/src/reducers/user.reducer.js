import { ActionsTypes } from "../constants/constants";

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  isPasswordChangedSuccess: false
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.REGISTER_USER_REQUEST:
    case ActionsTypes.LOGIN_USER_REQUEST:
    case ActionsTypes.CHANGE_PASSWORD_REQUEST:
    case ActionsTypes.PROFILE_USER_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case ActionsTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      }
    }
    case ActionsTypes.CHANGE_PASSWORD_FAILURE:
    case ActionsTypes.REGISTER_USER_FAILED:
    case ActionsTypes.PROFILE_USER_FAILED:
    case ActionsTypes.LOGIN_USER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case ActionsTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload
      }
    }
    case ActionsTypes.CHANGE_PASSWORD_SUCCESS:{
      return {
        ...state,
        isPasswordChangedSuccess: true
      }
    }
    case ActionsTypes.PROFILE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      }
    }
    default: {
      return state
    }
  }
}
