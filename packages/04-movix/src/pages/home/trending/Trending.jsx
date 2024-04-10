import { useState } from 'react';

import { useFetch } from '../../../hooks/useFetch';

import ContentWrapper from '@/components/layouts/contentwapper/ContentWrapper';
import SwitchTabs from '@/components/ui/switchtabs/SwitchTabs';
import Carousel from '@/components/ui/carousel/Carousel';

const Trending = () => {
	const [endpoint, setEndpoint] = useState('day');

	const { data, loading } = useFetch(`/trending/all/${endpoint}`);

	const onTabChange = (tab) => {
		setEndpoint(tab === 'Hoy' ? 'day' : 'week');
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Tendencias</span>
				<SwitchTabs data={['Hoy', 'Semana']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} />
		</div>
	);
};

export default Trending;
