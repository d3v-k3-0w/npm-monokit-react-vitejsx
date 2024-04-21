import { useNearScreen } from '@/hooks/useNearScreen';
import React, { Suspense } from 'react';
import Spinner from './Spinner';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

const LazyTrending = () => {
	const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' });

	return (
		<div ref={fromRef}>
			<Suspense fallback={<Spinner/>}>
				{isNearScreen ? <TrendingSearches /> : null}
			</Suspense>
		</div>
	);
};

export default LazyTrending;
