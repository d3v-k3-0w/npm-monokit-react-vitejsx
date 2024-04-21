const BASE_URL = 'http://localhost:8080';

export const registerService = async ({ username, password }) => {
	try {
		const res = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		});

		if (!res.ok) throw new Error('Response is not ok');
		return true;
	} catch (err) {
		console.log(err);
	}
};
