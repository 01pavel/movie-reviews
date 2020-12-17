import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FilmsList from '../FilmsList/FilmsList';
import FilmInfo from '../FilmInfo/FilmInfo';
import { FILMS_URL } from '../../../config';

function FilmsPage({ setSnackbarMessage }) {
	const [filmsList, setFilmsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedFilmNumber, setSelectedFilmNumber] = useState(null);

	useEffect(() => {
		const fetchFilms = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(FILMS_URL);
				const data = await response.json();
				setFilmsList(data.results);
			} catch (err) {
				setSnackbarMessage(err.message);
			} finally {
				setIsLoading(false)
			}
		};
		fetchFilms();
	}, [setSnackbarMessage]);

	return (
		<Box display="flex">
			<Box width="20%">
				{isLoading ? <Typography variant="h5">
					loading...
				</Typography> :
					<FilmsList films={filmsList}
						selectedFilmNumber={selectedFilmNumber}
						setSelectedFilmNumber={setSelectedFilmNumber}
					/>}
			</Box>
			<Box width="80%"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<FilmInfo selectedFilmNumber={selectedFilmNumber}
					setSnackbarMessage={setSnackbarMessage}
				/>
			</Box>
		</Box >
	);
}

export default FilmsPage;
