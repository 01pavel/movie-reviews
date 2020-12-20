import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	Card,
	CardContent,
	Typography,
	Button,
} from '@material-ui/core';

import { AppContext } from '../../../contexts/AppContext';

function FilmInfo() {
	const {
		state: {
			films: {
				filmInfo,
				isLoadingInfo,
				items,
			}
		}
	} = useContext(AppContext);

	if (isLoadingInfo) {

		return (
			<Typography variant="h5">
				loading...
			</Typography>
		);
	} else if (filmInfo) {

		return (
			<>
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
				<Link to="/review">
					<Button>Review</Button>
				</Link>
			</>
		);
	} else if (items.length) {

		return (
			<Typography variant="h6">
				Select the film
			</Typography>
		);
	} else {
		return null;
	}
}

export default FilmInfo;