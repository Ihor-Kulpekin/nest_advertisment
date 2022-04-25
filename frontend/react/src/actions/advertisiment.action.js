import { ActionsTypes } from "../constants/constants";

export const getAdvertisimentActionRequest = (payload) => ({
  type: ActionsTypes.GET_ADVERTISIMENT_REQUEST,
  payload
})

export const getAdvertisimentActionSuccess = (payload) => ({
  type: ActionsTypes.GET_ADVERTISIMENT_SUCCESS,
  payload
})

export const getAdvertisimentActionFailure = (payload) => ({
  type: ActionsTypes.GET_ADVERTISIMENT_FAILURE,
  payload
})

export const getAdvertisimentsActionRequest = (payload) => ({
  type: ActionsTypes.GET_ADVERTISIMENTS_REQUEST,
  payload
})

export const getAdvertisimentsActionSuccess = (payload) => ({
  type: ActionsTypes.GET_ADVERTISIMENTS_SUCCESS,
  payload
})

export const getAdvertisimentsActionFailure = (payload) => ({
  type: ActionsTypes.GET_ADVERTISIMENTS_FAILURE,
  payload
})

export const createAdvertisimentActionRequest = (payload) => ({
  type: ActionsTypes.CREATE_ADVERTISIMENT_REQUEST,
  payload
})

export const createAdvertisimentActionSuccess = (payload) => ({
  type: ActionsTypes.CREATE_ADVERTISIMENT_SUCCESS,
  payload
})

export const createAdvertisimentActionFailure = (payload) => ({
  type: ActionsTypes.CREATE_ADVERTISIMENT_FAILURE,
  payload
})

export const setListType = (payload) => ({
  type: ActionsTypes.SET_LIST_TYPE,
  payload
})

export const setPage = (payload) => ({
  type: ActionsTypes.SET_PAGE,
  payload
})

export const updateAdvertisimentRequest = (payload) => ({
  type: ActionsTypes.UPDATE_ADVERTISIMENT_REQUEST,
  payload
})

export const updateAdvertisimentSuccess = (payload) => ({
  type: ActionsTypes.UPDATE_ADVERTISIMENT_SUCCESS,
  payload
})

export const updateAdvertisimentFailure = (payload) => ({
  type: ActionsTypes.UPDATE_ADVERTISIMENT_FAILURE,
  payload
})
