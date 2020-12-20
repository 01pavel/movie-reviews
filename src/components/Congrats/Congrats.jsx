import React, { useContext, useEffect, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { AppContext } from '../../contexts/AppContext';
import { Redirect } from 'react-router-dom';
import { resetState } from '../../actions/actions';

function Congrats() {
	const {
		state: {
			films: {
				filmInfo,
			},
			review: { username, email, review, isFormValid },
		},
		dispatch,
	} = useContext(AppContext);

	// write info to stateRef to show it after the app state was reset
	const stateRef = useRef({ filmInfo, username, email, review, isFormValid });

	useEffect(() => {
		dispatch(resetState())
	}, [])

	if (!stateRef.current.filmInfo || !stateRef.current.isFormValid) {
		return (<Redirect to="/" />);
	}

	return (
		<Grid item xs={11} md={10}>
			<Typography variant="h5" gutterBottom>
				{`Congratulations! Review of the "Episode ${stateRef.current.filmInfo.episode_id}.
				 ${stateRef.current.filmInfo.title}" was sent.`}
			</Typography>
			<Typography variant="h5">
				Username:
			</Typography>
			<Typography variant="h6" gutterBottom>
				{stateRef.current.username}
			</Typography>
			<Typography variant="h5">
				Email:
			</Typography>
			<Typography variant="h6" gutterBottom>
				{stateRef.current.email}
			</Typography>
			<Typography variant="h5">
				Review:
			</Typography>
			<Typography variant="h6" gutterBottom>
				{stateRef.current.review}
			</Typography>

		</Grid>
	);
}

export default Congrats;