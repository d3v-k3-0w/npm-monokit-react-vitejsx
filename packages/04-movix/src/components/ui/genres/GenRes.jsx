import React from 'react';
import { useSelector } from 'react-redux';

import '@/assets/scss/genres.style.scss';

const GenRes = ({ data }) => {
	// Usamos useSelector para obtener los géneros del estado de Redux
	const { genres } = useSelector((state) => state.home);

	return (
		<div className="genres">
			{/* 
			  filtramos los géneros que no tienen nombre.
				Esto evita la creación de elementos de React innecesarios.
				Luego mapeamos los géneros filtrados a elementos de React.
			*/}
			{data
				?.filter((g) => genres[g]?.name)
				.map((g) => (
					<div className="genre" key={g}>
						{genres[g]?.name}
					</div>
				))}
		</div>
	);
};

export default GenRes;
