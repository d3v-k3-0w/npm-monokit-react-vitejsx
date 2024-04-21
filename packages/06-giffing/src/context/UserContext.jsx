import { getFavsService } from '@/services/getFavsService';
import React, { useEffect, useState } from 'react';

const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
	const [favs, setFavs] = useState([]);
	const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));

	useEffect(() => {
		if (!jwt) return setFavs([]);

		getFavsService({ jwt })
			.then(setFavs)
			.catch((err) => {
				console.error(err);
			});
	}, [jwt]);

	return (
		<>
			<UserContext.Provider value={{ jwt, setJwt, favs, setFavs }}>
				{children}
			</UserContext.Provider>
		</>
	);
};

export default UserContext;
