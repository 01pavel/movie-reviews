import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FILMS_URL } from '../../../config';

function FilmInfo({ selectedFilmNumber, setSnackbarMessage }) {
	const [filmInfo, setFilmInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (selectedFilmNumber === null) {
			return;
		}

		const fetchFilmInfo = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(`${FILMS_URL}${selectedFilmNumber}`);
				const data = await response.json();
				setFilmInfo(data);
			} catch (err) {
				setFilmInfo(null);
				setSnackbarMessage(err.message);
			} finally {
				setIsLoading(false)
			}
		};
		fetchFilmInfo();

	}, [selectedFilmNumber, setSnackbarMessage]);

	if (isLoading) {

		return <Typography variant="h5">
			loading...
		</Typography>;
	} else if (filmInfo) {

		return <>
			<Card>
				<Typography variant="h4">
					{filmInfo.title}
				</Typography>
				<CardContent>
					<Typography variant="h5">
						{filmInfo.opening_crawl}
					</Typography>
				</CardContent>
			</Card>
			<Link to={{
				pathname: "/review",
				state: { episodeId: filmInfo.episode_id }
			}}
			>
				<Button>Review</Button>
			</Link>
		</>;
	} else {

		return <Typography variant="h6">
			Select the film
		</Typography>;
	}
}

export default FilmInfo;