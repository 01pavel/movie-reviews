import {
	GET_FILMS_REQUEST,
	GET_FILMS_SUCCESS,
	GET_INFO_REQUEST,
	GET_INFO_SUCCESS,
	SET_ERROR,
} from "../actions/actionTypes";

export const initialState = {
	films: {
		items: [],
		isLoading: false,
		selectedFilmNumber: null,
		filmInfo: null,
		isLoadingInfo: false,
	},
	error: '',
};

export const appReducer = (state, action) => {
	switch (action.type) {
		case GET_FILMS_REQUEST: {
			return {
				...state,
				films: {
					...state.films,
					isLoading: action.payload,
				},
			};
		}
		case GET_FILMS_SUCCESS: {
			return {
				...state,
				films: {
					...state.films,
					items: action.payload,
				},
			};
		}
		case GET_INFO_REQUEST: {
			return {
				...state,
				films: {
					...state.films,
					...action.payload,
				}
			};
		}
		case GET_INFO_SUCCESS: {
			return {
				...state,
				films: {
					...state.films,
					filmInfo: action.payload,
				}
			};
		}
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state
	}
};