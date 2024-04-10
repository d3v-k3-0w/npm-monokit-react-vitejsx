import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '@/components/ui/lazyloader/Img';
import ContentWrapper from '@/components/layouts/contentwapper/ContentWrapper';

import '../../../assets/scss/herobanner.style.scss';
import SearchInput from '@/components/ui/searchinput/SearchInput';

const HeroBanner = () => {
	const [background, setBackground] = useState('');

	const { url } = useSelector((state) => state.home);

	const { data, loading } = useFetch('/movie/upcoming');

	// console.log(data);

	useEffect(() => {
		//++ verifica si 'data' y 'url.backdrop' están disponibles antes de intentar construir la URL de la imagen.
		if (data && url.backdrop) {
			//++ genera un índice aleatorio para seleccionar una imagen de fondo de 'data.results'.
			const randomIndex = Math.floor(Math.random() * data.results.length);
			//++ construye la URL de la imagen.
			const bg = `${url.backdrop}${data.results[randomIndex].backdrop_path}`;

			setBackground(bg);
		}

		//++ el efecto se ejecutará nuevamente cada vez que 'data' o 'url.backdrop' cambien.
	}, [data, url.backdrop]);

	return (
		<div className="heroBanner">
			{!loading && (
				<div className="backdropImg">
					<Img src={background} />
				</div>
			)}

			<div className="opacityLayer"></div>

			<ContentWrapper>
				<div className="heroBannerContent">
					<span className="title">Bienvenido.</span>
					<span className="subtitle">
						Millones de películas, programas de TV y personas por descubrir. Explora ahora.
					</span>

					<SearchInput showButton={true} />
				</div>
			</ContentWrapper>
		</div>
	);
};

export default HeroBanner;
