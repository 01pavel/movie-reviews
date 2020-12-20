import React, {
	useEffect,
	useContext
} from 'react';
import { Grid, Typography } from '@material-ui/core';

import FilmsList from '../FilmsList/FilmsList';
import FilmInfo from '../FilmInfo/FilmInfo';
import { FILMS_URL } from '../../../config';
import { getFilmsRequest, getFilmsSuccess, setError } from '../../../actions/actions';
import { AppContext } from '../../../contexts/AppContext';


function FilmsPage() {
	const {
		state: {
			films: {
				isLoading,
				items: films,
			}
		},
		dispatch
	} = useContext(AppContext);

	useEffect(() => {
		if (films.length) {
			return;
		}

		/**
		 * Fetches the films list
		 */
		const fetchFilms = async () => {
			try {
				dispatch(getFilmsRequest(true));
				const response = await fetch(FILMS_URL);
				const data = await response.json();
				dispatch(getFilmsSuccess(data.results));
			} catch (err) {
				dispatch(setError(err.message));
			} finally {
				dispatch(getFilmsRequest(false));
			}
		};
		fetchFilms();
	}, []);

	return (
		<Grid container>
			<Grid container item xs={4} md={3}>
				{isLoading ?
					<Typography variant="h5">
						loading...
					</Typography> :
					<FilmsList films={films} />
				}
			</Grid>
			<Grid container item alignItems="flex-start" justify="center" xs={8} md={9}>
				<FilmInfo />
			</Grid>
		</Grid >
	);
}

export default FilmsPage;
