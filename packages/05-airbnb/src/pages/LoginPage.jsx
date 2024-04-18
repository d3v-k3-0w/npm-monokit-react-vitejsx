import { UserContext } from '@/UserContext';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const { setUser } = useContext(UserContext);

	const handlerLoginSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post('/login', { email, password });

			//++ settear el estado del UserContextProvider con la data del login
			setUser(data);

			alert('Login successful');
			setRedirect(true);
		} catch (err) {
			alert('Login failed');
		}
	};

	if (redirect) {
		return <Navigate to={'/'} />;
	}

	return (
		<div className="mt-4 grow flex items-center justify-around">
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Login</h1>

				<form className="max-w-md mx-auto" onSubmit={handlerLoginSubmit}>
					<input
						type="email"
						value={email}
						placeholder="tu_correo@gmail.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						value={password}
						placeholder="clave"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="primary">Login</button>
					<div className="text-center py-2text-gray-500">
						¿No tienes una cuenta todavía?
						<Link className="underline text-black ml-2" to={'/register'}>
							Regístrate
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
export default LoginPage;
