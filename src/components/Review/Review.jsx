import React, { Suspense } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const ReviewPage = React.lazy(() => import('./ReviewPage/ReviewPage'));

function Review() {
	let location = useLocation();

	if (!location.state) {
		return <Redirect to="/" />
	}

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<ReviewPage />
			</Suspense>
		</div>
	);
}

export default Review;