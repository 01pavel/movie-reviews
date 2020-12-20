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
} from "../actions/actionTypes";

export const initialState = {
	films: {
		items: [],
		isLoading: false,
		selectedFilmNumber: null,
		filmInfo: null,
		isLoadingInfo: false,
	},
	review: {
		username: '',
		usernameError: '',
		usernameIsDirty: false,
		email: '',
		emailError: '',
		emailIsDirty: false,
		review: '',
		reviewError: '',
		reviewIsDirty: false,
		isFormValid: false,
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
		case SET_FIELD_VALUE: {
			const { field, value, error } = action.payload;
			return {
				...state,
				review: {
					...state.review,
					[field]: value,
					[`${field}Error`]: error,
				}
			}
		}
		case SET_IS_DIRTY: {
			return {
				...state,
				review: {
					...state.review,
					[`${action.payload}IsDirty`]: true,
				}
			}
		}
		case SET_IS_FORM_VALID: {
			return {
				...state,
				review: {
					...state.review,
					isFormValid: action.payload,
				}
			};
		}
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case RESET_STATE: {
			return initialState;
		}
		default:
			return state
	}
};