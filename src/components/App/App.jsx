import React, { useReducer } from 'react';
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

import { ContextApp } from '../../contexts/ContextApp';
import { appReducer, initialState } from '../../reducers/appReducer.js';
import { setError } from '../../actions/actions';

function App() {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<ContextApp.Provider value={{ dispatch, state }}>
			<Router>
				<Container maxWidth="lg">
					<Paper classes={{
						root: styles.mainPaper
					}}>
						<Switch>
							<Route exact path="/">
								<Films />
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
				</Container>
			</Router>
		</ContextApp.Provider>
	);
}

export default App;
