import React, { useReducer } from 'react';
import styles from './App.module.css';
import {
	Grid,
	Typography,
	Paper,
	Snackbar,
	IconButton,
} from '@material-ui/core';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Films from '../Films/Films';
import Review from '../Review/Review';
import Congrats from '../Congrats/Congrats';

import { AppContext } from '../../contexts/AppContext';
import { appReducer, initialState } from '../../reducers/appReducer.js';
import { setError } from '../../actions/actions';

function App() {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AppContext.Provider value={{ dispatch, state }}>
			<Router>
				<Grid container justify="center">
					<Grid item xs={12} md={10} lg={8}>
						<Paper classes={{
							root: styles.mainPaper
						}}>
							<Grid container justify="center">
								<Switch>
									<Route exact path="/">
										<Films />
									</Route>
									<Route exact path="/review">
										<Review />
									</Route>
									<Route path="/congrats" exact>
										<Congrats />
									</Route>
									<Route>
										<Typography>
											not found
										</Typography>
									</Route>
								</Switch>
							</Grid>
							<Snackbar
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								open={Boolean(state.error)}
								autoHideDuration={4000}
								onClose={() => dispatch(setError(''))}
								message={state.error}
								action={
									<IconButton size="small"
										aria-label="close"
										color="inherit"
										onClick={() => dispatch(setError(''))}
									>
										&#x2715;
								</IconButton>
								}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
