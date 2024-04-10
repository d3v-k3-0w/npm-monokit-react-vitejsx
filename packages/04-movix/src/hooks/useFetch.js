import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading('Cargando...');
		setData(null);
		setError(null);

		fetchDataFromApi(url)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((err) => {
				setLoading(false);
				setError('Algo salió mal');
			});
	}, [url]);

	return {
		data,
		loading,
		error,
	};
};
