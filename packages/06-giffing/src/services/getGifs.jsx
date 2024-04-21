import { BASE, KEY } from './settings';

export const getGifs = async ({
	limit = 25,
	keyword = 'panda',
	rating = 'g',
	page = 0,
} = {}) => {
	const URL = `${BASE}/gifs/search?api_key=${KEY}&q=${keyword}&limit=12&offset=${page * limit}&rating=${rating}&lang=en&bundle=messaging_non_clips`;

	const response = await fetch(URL);
	const resJSON = await response.json();

	const gifs = resJSON.data.map((img) => {
		const { id, title, images } = img;
		const { url } = images.original;
		return { id, title, url };
	});

	return gifs;
};
