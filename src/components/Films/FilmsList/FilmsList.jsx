import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function FilmsList({ films, selectedFilmNumber, setSelectedFilmNumber }) {

	return (
		<List component="nav" aria-label="main mailbox folders">
			{films.map(({ episode_id, title }, index) => {
				const filmNumber = ++index;
				return (
					<ListItem key={episode_id}
						button
						selected={selectedFilmNumber === filmNumber}
						onClick={() => setSelectedFilmNumber(filmNumber)}
					>
						<ListItemText primary={title} />
					</ListItem>
				)
			})}
		</List>
	);
}

export default FilmsList;