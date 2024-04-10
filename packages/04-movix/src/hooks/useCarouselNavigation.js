import { useRef } from 'react';

export const useCarouselNavigation = () => {
	const carouselContainer = useRef();

	const navigate = (dir) => {
		const container = carouselContainer.current;

		const scrollAmount =
			dir === 'left'
				? container.scrollLeft - (container.offsetWidth + 10)
				: container.scrollLeft + (container.offsetWidth + 10);

		container.scrollTo({
			left: scrollAmount,
			behavior: 'smooth',
		});
	};

	return { carouselContainer, navigate };
};
