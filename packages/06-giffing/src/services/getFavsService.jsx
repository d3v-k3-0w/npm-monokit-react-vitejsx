const BASE_URL = 'http://localhost:8080';

export const getFavsService = ({ jwt }) => {
	return fetch(`${BASE_URL}/favs`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`, // Agregar el token JWT al encabezado de autorización
		},
	})
		.then((res) => {
			console.log(res);
			if (!res.ok) throw new Error('Response is not ok');

			return res.json();
		})
		.then((res) => {
			const { favs } = res;
			return favs;
		})
		.catch((err) => {
			console.log(err);
		});
};
