import React, { useContext } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { AppContext } from '../../../contexts/AppContext';
import { getInfoRequest, getInfoSuccess, setError } from '../../../actions/actions';
import { FILMS_URL } from '../../../config';

function FilmsList({ films }) {
	const {
		state: {
			films: {
				selectedFilmNumber,
			}
		},
		dispatch
	} = useContext(AppContext);

	/**
	 * Set the selected film and loads its info
	 * @param filmNumber - number of the film 
	 */
	const selectFilm = async (filmNumber) => {
		try {
			dispatch(getInfoRequest({
				isLoadingInfo: true,
				selectedFilmNumber: filmNumber,
			}));
			const response = await fetch(`${FILMS_URL}${filmNumber}`);
			const data = await response.json();
			dispatch(getInfoSuccess(data));
		} catch (err) {
			dispatch(getInfoSuccess(null));;
			dispatch(setError(err.message));
		} finally {
			dispatch(getInfoRequest({
				isLoadingInfo: false,
			}));
		}
	};

	return (
		<List>
			{films.map(({ episode_id, title }, index) => {
				const filmNumber = ++index;
				return (
					<ListItem key={episode_id}
						button
						selected={selectedFilmNumber === filmNumber}
						onClick={() => selectFilm(filmNumber)}
					>
						<ListItemText primary={title} />
					</ListItem>
				)
			})}
		</List>
	);
}

export default FilmsList;