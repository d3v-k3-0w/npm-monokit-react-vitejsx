import { BASE, KEY } from './settings';

const fromApiResponseToGifs = (res) => {
	const { data = [] } = res;

	return data;
};

export const getTrendings = () => {
	const URL = `${BASE}/trending/searches?api_key=${KEY}`;

	return fetch(URL)
		.then((res) => res.json())
		.then(fromApiResponseToGifs);
};
