import React from 'react';

import { useFetch } from '../../../hooks/useFetch';
import Carousel from '@/components/ui/carousel/Carousel';

const Recomendation = ({ mediaType, id }) => {
	const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);

	return (
		<Carousel
			title="Recommendations"
			data={data?.results}
			loading={loading}
			endpoint={mediaType}
		/>
	);
};

export default Recomendation;
