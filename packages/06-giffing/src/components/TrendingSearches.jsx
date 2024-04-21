import { useEffect, useState } from 'react';

import { getTrendings } from '@/services/getTrendings';

import Trending from './Trending';

const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		getTrendings().then(setTrends);
	}, []);

	return (
		<>
			<Trending name="Tendencias:" options={trends} />
		</>
	);
};

export default TrendingSearches;
