import axios from 'axios';

const URL = 'http://localhost:3001/notes';

export const getAllNotes = async () => {
	const res = await axios.get(URL);

	return res.data; //notes
};

export const createNote = async (title, content) => {
	const note = { title, content, important: false };

	const res = await axios.post(URL, note);

	return res.data;
};
