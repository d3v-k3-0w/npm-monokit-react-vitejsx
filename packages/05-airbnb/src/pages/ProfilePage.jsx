import { UserContext } from '@/UserContext';
import AccountNav from '@/components/AccountNav';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PlacesPage from './PlacesPage';

const ProfilePage = () => {
	const { ready, user } = useContext(UserContext);
	const [redirect, setRedirect] = useState(null);

	let { subpage } = useParams();

	if (subpage === undefined) {
		subpage = 'profile';
	}

	const handlerLogout = async () => {
		await axios.post('/logout');
		setRedirect('/');
		// setUser(null); // no se puede actualizar el estado del padre dentro del ciclo del render del hijo
	};

	//++ si el usuario no esta ready
	if (!ready) {
		return 'Loading...';
	}

	//++ si el usuario esta listo pero no hay usuario navega al login
	if (ready && !user && !redirect) {
		return <Navigate to={'/login'} />;
	}

	if (redirect) {
		return <Navigate to={redirect} />;
	}

	return (
		<div>
			<AccountNav />

			{subpage === 'profile' && (
				<div className="text-center max-w-lg mx-auto">
					Logged in as {user.name} ({user.email})<br />
					<button className="primary max-w-sm mt-2" onClick={handlerLogout}>
						Logout
					</button>
				</div>
			)}
			{subpage === 'places' && <PlacesPage />}
		</div>
	);
};
export default ProfilePage;
