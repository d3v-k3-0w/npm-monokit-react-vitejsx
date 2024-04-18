import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlerRegisterUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post('/registrar', {
				name,
				email,
				password,
			});
			alert('Registro exitoso. Ahora puedes iniciar sesión');
		} catch (err) {
			alert('El registro fallo, por favor inténtelo de nuevo');
		}
	};

	return (
		<div className="mt-4 grow flex items-center justify-around">
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Regístrate</h1>

				<form className="max-w-md mx-auto" onSubmit={handlerRegisterUser}>
					<input
						type="text"
						value={name}
						placeholder="Taylor Luke"
						onChange={(e) => setName(e.target.value)}
					/>
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
					<button className="primary">Guardar</button>
					<div className="text-center py-2 text-gray-500">
						¿Ya eres un miembro?
						<Link className="underline text-black ml-2" to={'/login'}>
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
export default RegisterPage;
