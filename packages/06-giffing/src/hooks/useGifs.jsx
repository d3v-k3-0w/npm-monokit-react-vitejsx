import { useContext, useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIALPAGE = 0;

// keyword -> es una dependencia del efecto, xq la primera vez que se renderice con el useEffect hacemos una llamada
//  a la api pasandole el keyword como parametro
export const useGifs = ({ keyword, rating } = { keyword: null }) => {
	const { gifs, setGifs } = useContext(GifsContext);
	const [page, setPage] = useState(INITIALPAGE);
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingNextPage] = useState(false);

	// const [gifs, setGifs] = useState([]);

	// recuperamos la keyword del localStorage
	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

	// el useEffect recibe dos parametros , el 1ro es la funcion que que queremos ejecutar y la 2da son las dependencias
	// que tiene el efecto y es un Array; cuando es un array vacio [] se va ejecutar solo una vez cuando se renderiza el
	// componente.(esto equivale al ComponentDidMount)
	useEffect(() => {
		setLoading(true);

		const fetchGifs = async () => {
			const gifs = await getGifs({ keyword: keywordToUse, rating });

			setGifs(gifs);

			setLoading(false);

			//  guardamos la keyword en el localStorage
			localStorage.setItem('lastKeyword', keyword);
		};

		fetchGifs();
	}, [keyword, keywordToUse, setGifs, rating]);

	//  si quito el [] quedaria en un loop ,xq que cada vez que se actualiza el estado ejecuta el efecto
	//  y el efecto ejecuta una actualizacion del estado y al tener una dependencia solo cada vez que el accKeyword cambie vuelve a ejecutar
	//  el effecto

	useEffect(() => {
		if (page === INITIALPAGE) return;

		setLoadingNextPage(true);

		getGifs({ keyword: keywordToUse, rating, page }).then((nexGifs) => {
			setGifs((prevGifs) => prevGifs.concat(nexGifs));
			setLoadingNextPage(false);
		});
	}, [keywordToUse, page, rating, setGifs]);

	return { loading, gifs, loadingNextPage, setPage };
};
