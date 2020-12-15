import React from 'react';
import styles from './App.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';

function App() {
	return (
		<Container maxWidth="lg" className="App">
			<Paper classes={{
				root: styles.mainPaper
			}}>
				<Typography variant="h4" component="h1" gutterBottom>
					Create React App + Material-UI
        		</Typography>
				<Button variant="contained" color="primary">
					Primary Button
        		</Button>
				<Button variant="contained" color="secondary">
					Secondary Button
       			</Button>
			</Paper>
		</Container>
	);
}

export default App;