import React, { Suspense } from 'react';

const ReviewPage = React.lazy(() => import('./ReviewPage/ReviewPage'));

function Review() {

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ReviewPage />
		</Suspense>
	);
}

export default Review;