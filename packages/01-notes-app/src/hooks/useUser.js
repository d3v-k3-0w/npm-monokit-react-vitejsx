import { useEffect, useState } from 'react';
import userSrvc from '../services/userService';
import noteSrvc from '../services/noteService';

export const useUser = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('LoggedUserNoteApp');

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);

			setUser(user);

			noteSrvc.setToken(user.token);
		}
	}, []);

	const loginUser = async (authValues) => {
		try {
			const user = await userSrvc.login({ ...authValues });

			// Guardar las sesion con el token del usuario en el localStorage
			window.localStorage.setItem('LoggedUserNoteApp', JSON.stringify(user));

			noteSrvc.setToken(user.token);

			// Setear el estado setUser con el user de la api
			setUser(user);
			return null;
		} catch (err) {
			console.log(err);
			return 'Wrong credentials';
		}
	};

	const logout = () => {
		setUser(null);

		noteSrvc.setToken(user.token);

		window.localStorage.removeItem('LoggedUserNoteApp');
	};

	return {
		user,
		loginUser,
		logout,
	};
};
