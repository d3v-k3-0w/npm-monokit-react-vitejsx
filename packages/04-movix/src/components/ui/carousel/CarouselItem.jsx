import React from 'react';
import dayjs from 'dayjs';
import CircleRating from '../circlerating/CircleRating';
import GenRes from '../genres/GenRes';
import Img from '../lazyloader/Img';
import { useNavigateTo } from '@/hooks/useNavigateTo';

import PosterFallback from '@/assets/img/no-poster.png';

const CarouselItem = ({ item, url, endpoint }) => {
	const navigateTo = useNavigateTo();

	const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;

	return (
		<div
			className="carouselItem"
			key={item.id}
			onClick={() => navigateTo(`/${item.media_type || endpoint}`, item.media_type, item.id)}>
			<div className="posterBlock">
				<Img src={posterUrl} />
				<CircleRating rating={item.vote_average.toFixed(1)} />
				<GenRes data={item.genre_ids.slice(0, 2)} />
			</div>
			<div className="textBlock">
				<span className="title">{item.title || item.name}</span>
				<span className="date">{dayjs(item.release_Date).format('MMM D, YYYY')}</span>
			</div>
		</div>
	);
};

export default CarouselItem;
