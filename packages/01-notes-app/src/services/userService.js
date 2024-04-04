import axios from 'axios';

const URL = 'http://localhost:3001/api/user/login';

const login = async (credentials) => {
	//++ data tiene la info que interesa para la sesion del usuario
	const { data } = await axios.post(URL, credentials);
	return data;
};

const userSrvc = {
	login,
};

export default userSrvc;
