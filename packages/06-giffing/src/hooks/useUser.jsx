import UserContext from '@/context/UserContext';
import { addFavService } from '@/services/addFavService';
import { loginService } from '@/services/loginService';
import { useCallback, useContext, useState } from 'react';

export const useUser = () => {
	const [isLoadingOrError, setIsLoadingOrError] = useState({
		loading: false,
		error: false,
	});

	const { jwt, setJwt, favs, setFavs } = useContext(UserContext);

	//++ optimizar con el useCallback para que no se vuelva crear esta función login cada vez qe se actualiza el setJwt
	const login = useCallback(
		({ username, password }) => {
			setIsLoadingOrError({ loading: true, error: false });

			loginService({ username, password })
				.then((jwt) => {
					setIsLoadingOrError({ loading: false, error: false });
					console.log(jwt);
					window.sessionStorage.setItem('jwt', jwt);
					setJwt(jwt);
				})
				.catch((err) => {
					window.sessionStorage.removeItem('jwt', jwt);
					setIsLoadingOrError({ loading: false, error: true });
					console.error(err);
				});
		},
		[setJwt]
	); //[] -> dependencia, para que cada vez que cambie el setJwt(no cambia) la función login debería volver a crearse

	const addFav = useCallback(
		({ id }) => {
			addFavService({ id, jwt })
				.then((favs) => setFavs(favs))
				.catch((err) => {
					console.error(err);
				});
		},
		[setJwt]
	);

	const logout = useCallback(() => {
		setJwt(null); //limpiar el jwt
	}, [setJwt]);

	return {
		addFav,
		favs,
		isLogged: Boolean(jwt),
		isLoginLoading: isLoadingOrError.loading,
		hasLoginError: isLoadingOrError.error,
		login,
		logout,
	};
};
