import React, { useState } from 'react';
import styles from './App.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Films from '../Films/Films';
import Review from '../Review/Review';

function App() {
	const [snackbarMessage, setSnackbarMessage] = useState('');

	return (
		<Router>
			<Container maxWidth="lg">
				<Paper classes={{
					root: styles.mainPaper
				}}>
					<Switch>
						<Route exact path="/">
							<Films setSnackbarMessage={setSnackbarMessage} />
						</Route>
						<Route exact path="/review">
							<Review />
						</Route>
						<Route>
							<Typography>
								not found
							</Typography>
						</Route>
					</Switch>
					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						open={Boolean(snackbarMessage)}
						autoHideDuration={4000}
						onClose={() => setSnackbarMessage('')}
						message={snackbarMessage}
						action={
							<IconButton size="small"
								aria-label="close"
								color="inherit"
								onClick={() => setSnackbarMessage('')}
							>
								&#x2715;
							</IconButton>
						}
					/>
				</Paper>
			</Container>
		</Router>
	);
}

export default App;
