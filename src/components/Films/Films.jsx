import React, { Suspense } from 'react';

const FilmsPage = React.lazy(() => import('./FilmsPage/FilmsPage'));

function Films({ setSnackbarMessage }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<FilmsPage setSnackbarMessage={setSnackbarMessage} />
		</Suspense>
	);
}

export default Films;