import React, {
	useEffect,
	useContext
} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FilmsList from '../FilmsList/FilmsList';
import FilmInfo from '../FilmInfo/FilmInfo';
import { FILMS_URL } from '../../../config';
import { getFilmsRequest, getFilmsSuccess, setError } from '../../../actions/actions';
import { AppContext } from '../../../contexts/AppContext';

import styles from './FilmsPage.module.css';

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
		<Box className={styles.filmsContainer}>
			<Box className={styles.filmsListContainer}>
				{isLoading ? <Typography variant="h5">
					loading...
				</Typography> :
					<FilmsList films={films} />}
			</Box>
			<Box className={styles.filmInfoContainer}>
				<FilmInfo />
			</Box>
		</Box >
	);
}

export default FilmsPage;
