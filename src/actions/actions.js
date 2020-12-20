import {
	GET_FILMS_REQUEST,
	GET_FILMS_SUCCESS,
	GET_INFO_REQUEST,
	GET_INFO_SUCCESS,
	SET_FIELD_VALUE,
	SET_IS_DIRTY,
	SET_IS_FORM_VALID,
	SET_ERROR,
	RESET_STATE,
} from "./actionTypes";

export const getFilmsRequest = payload => ({ type: GET_FILMS_REQUEST, payload })
export const getFilmsSuccess = payload => ({ type: GET_FILMS_SUCCESS, payload })
export const getInfoRequest = payload => ({ type: GET_INFO_REQUEST, payload })
export const getInfoSuccess = payload => ({ type: GET_INFO_SUCCESS, payload })
export const setFieldValue = payload => ({ type: SET_FIELD_VALUE, payload })
export const setIsDirty = payload => ({ type: SET_IS_DIRTY, payload })
export const setIsFormValid = payload => ({ type: SET_IS_FORM_VALID, payload })
export const setError = payload => ({ type: SET_ERROR, payload })
export const resetState = () => ({ type: RESET_STATE })