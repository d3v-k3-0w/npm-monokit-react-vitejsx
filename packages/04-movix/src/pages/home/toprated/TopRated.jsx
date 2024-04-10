import { useState } from 'react';

import { useFetch } from '../../../hooks/useFetch';

import ContentWrapper from '@/components/layouts/contentwapper/ContentWrapper';
import SwitchTabs from '@/components/ui/switchtabs/SwitchTabs';
import Carousel from '@/components/ui/carousel/Carousel';

const TopRated = () => {
	const [endpoint, setEndpoint] = useState('movie');

	const { data, loading } = useFetch(`/${endpoint}/top_rated`);

	const onTabChange = (tab) => {
		setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Los más valorados</span>
				<SwitchTabs data={['Movies', 'TV']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} endpoint={endpoint} />
		</div>
	);
};

export default TopRated;
