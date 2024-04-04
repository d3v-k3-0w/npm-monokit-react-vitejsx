import axios from 'axios';

const URL = 'http://localhost:3001/api/note';

let token = null;

const setToken = (newToken) => {
	token = `Bearer ${newToken}`;
};

const getAllNotes = async () => {
	const res = await axios.get(URL);
	return res.data;
};

const createNote = async (newObject) => {
	const config = {
		headers: {
			Authorization: token,
		},
	};

	const res = await axios.post(URL, newObject, config);
	return res.data;
};

const updateNote = async (id, newObject) => {
	const config = {
		headers: {
			Authorization: token,
		},
	};

	const res = await axios.put(`${URL}/${id}`, newObject, config);
	return res.data;
};

const noteSrvc = {
	getAllNotes,
	createNote,
	updateNote,
	setToken,
};

export default noteSrvc;
