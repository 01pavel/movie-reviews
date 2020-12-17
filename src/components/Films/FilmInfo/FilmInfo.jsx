import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FILMS_URL } from '../../../config';
import { ContextApp } from '../../../contexts/ContextApp';
import { getInfoRequest, getInfoSuccess, setError } from '../../../actions/actions';

function FilmInfo() {
	const {
		state: {
			films: {
				selectedFilmNumber,
				filmInfo,
				isLoadingInfo,
			}
		},
		dispatch
	} = useContext(ContextApp);

	if (isLoadingInfo) {

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