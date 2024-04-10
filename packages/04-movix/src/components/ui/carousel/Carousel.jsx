import React from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import CarouselItem from './CarouselItem';
import ContentWrapper from '@/components/layouts/contentwapper/ContentWrapper';
import SkeletonItem from '../skeleton/SkeletonItem';
import { useCarouselNavigation } from '@/hooks/useCarouselNavigation';

import '@/assets/scss/carousel.style.scss';

const Carousel = ({ data, loading, endpoint, title }) => {
	const { carouselContainer, navigate } = useCarouselNavigation();

	const { url } = useSelector((state) => state.home);

	return (
		<div className="carousel">
			<ContentWrapper>
				{title && <div className="carouselTitle">{title}</div>}

				<BsFillArrowLeftCircleFill
					className="carouselLeftNav arrow"
					onClick={() => navigate('left')}
				/>
				<BsFillArrowRightCircleFill
					className="carouselRighttNav arrow"
					onClick={() => navigate('right')}
				/>
				{!loading ? (
					<div className="carouselItems" ref={carouselContainer}>
						{data?.map((item) => (
							<CarouselItem key={item.id} item={item} url={url} endpoint={endpoint} />
						))}
					</div>
				) : (
					<div className="loadingSkeleton">
						<SkeletonItem />
						<SkeletonItem />
						<SkeletonItem />
						<SkeletonItem />
						<SkeletonItem />
					</div>
				)}
			</ContentWrapper>
		</div>
	);
};

export default Carousel;
