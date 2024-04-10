import React from 'react';
import { useSelector } from 'react-redux';
import CircleRating from '../circlerating/CircleRating';
import Genres from '../genres/GenRes';
import { formatDate } from '@/utils/formatDate';
import Img from '../lazyloader/Img';
import { useNavigateTo } from '@/hooks/useNavigateTo';

import PosterFallback from '@/assets/img/no-poster.png';
import '@/assets/scss/moviecard.style.scss';

const MovieCard = ({ data, fromSearch, mediaType }) => {
	const { url } = useSelector((state) => state.home);
	const navigateTo = useNavigateTo;
	const posterUrl = data.poster_path ? url.poster + data.poster_path : PosterFallback;

	return (
		<div
			className="movieCard"
			onClick={() => navigateTo(null, data.media_type || mediaType, data.id)}>
			<div className="posterBlock">
				<Img className="posterImg" src={posterUrl} />
				{!fromSearch && (
					<>
						{/* Utilizando la sintaxis de fragmento corto */}
						<CircleRating rating={data.vote_average.toFixed(1)} />
						<Genres data={data.genre_ids.slice(0, 2)} />
					</>
				)}
			</div>
			<div className="textBlock">
				<span className="title">{data.title || data.name}</span>
				<span className="date">{formatDate(data.release_date)}</span>
			</div>
		</div>
	);
};

export default MovieCard;
