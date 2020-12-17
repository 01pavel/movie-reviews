import React, { Suspense } from 'react';

const FilmsPage = React.lazy(() => import('./FilmsPage/FilmsPage'));

function Films() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<FilmsPage />
		</Suspense>
	);
}

export default Films;