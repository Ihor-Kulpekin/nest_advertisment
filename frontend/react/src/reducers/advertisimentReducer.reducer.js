import { ActionsTypes } from "../constants/constants";

export const initialState = {
  loading: false,
  error: '',
  advertisiments: [],
  totalCount: 0,
  successCreated: false,
  listType: 'list',
  page: 1,
  advertisiment: null,
  updatedObject: null
}

export default function advertisiment(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.GET_ADVERTISIMENT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case ActionsTypes.GET_ADVERTISIMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        advertisiment: action.payload
      }
    }
    case ActionsTypes.GET_ADVERTISIMENT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case ActionsTypes.GET_ADVERTISIMENTS_REQUEST: {
      return {
        ...state,
        loading: true,
        advertisiment: null
      }
    }
    case ActionsTypes.GET_ADVERTISIMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: '',
        advertisiments: action.payload.items,
        totalCount: action.payload.totalCount,
      }
    }
    case ActionsTypes.GET_ADVERTISIMENTS_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false
      }
    }
    case ActionsTypes.CREATE_ADVERTISIMENT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case ActionsTypes.CREATE_ADVERTISIMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        successCreated: true
      }
    }
    case ActionsTypes.CREATE_ADVERTISIMENT_FAILURE: {
      return {
        ...state,
        loading: false,
        successCreated: false,
        error: action.payload.errors
      }
    }
    case ActionsTypes.SET_LIST_TYPE: {
      return {
        ...state,
        listType: action.payload
      }
    }
    case ActionsTypes.SET_PAGE: {
      return {
        ...state,
        page: action.payload
      }
    }
    case ActionsTypes.UPDATE_ADVERTISIMENT_SUCCESS: {
      return {
        ...state,
        updatedObject: action.payload
      }
    }
    case ActionsTypes.UPDATE_ADVERTISIMENT_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}
