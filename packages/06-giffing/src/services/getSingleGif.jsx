import { BASE, KEY } from './settings';

const fromApiResponseToGif = (res) => {
	const { data } = res;
	const { id, images, title } = data;

	const { url } = images.original;

	return { id, title, url };
};

export const getSingleGif = ({ id }) => {
	return fetch(`${BASE}/gifs/${id}?api_key=${KEY}`)
		.then((res) => res.json())
		.then(fromApiResponseToGif);
};
