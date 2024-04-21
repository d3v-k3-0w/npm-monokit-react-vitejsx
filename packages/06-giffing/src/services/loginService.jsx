const BASE_URL = 'http://localhost:8080';

export const loginService = ({ username, password }) => {
	return fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	})
		.then((res) => {
			if (!res.ok) throw new Error('Response is not ok');

			return res.json();
		})
		.then((res) => {
			const { token } = res;
			return token;
		})
		.catch((err) => {
			console.log(err);
		});
};
