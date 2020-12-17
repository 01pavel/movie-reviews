import {
	GET_FILMS_REQUEST,
	GET_FILMS_SUCCESS,
	GET_INFO_REQUEST,
	GET_INFO_SUCCESS,
	SET_ERROR,
} from "./actionTypes";

export const getFilmsRequest = payload => ({ type: GET_FILMS_REQUEST, payload })
export const getFilmsSuccess = payload => ({ type: GET_FILMS_SUCCESS, payload })
export const getInfoRequest = payload => ({ type: GET_INFO_REQUEST, payload })
export const getInfoSuccess = payload => ({ type: GET_INFO_SUCCESS, payload })
export const setError = payload => ({ type: SET_ERROR, payload })