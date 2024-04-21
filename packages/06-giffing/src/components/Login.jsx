import '@/assets/css/modules/login.module.style.css';
import { useUser } from '@/hooks/useUser';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

	const [, navigate] = useLocation();

	useEffect(() => {
		if (isLogged) {
			navigate('/');
			onLogin && onLogin();
		}
	}, [isLogged, navigate, onLogin]);

	const handlerSubmit = (e) => {
		e.preventDefault();
		// alert(`${username}, ${password}`);
		login({ username, password });
	};

	return (
		<div>
			{isLoginLoading && <b>Checking credentials...</b>}
			{!isLoginLoading && (
				<form className="form" onSubmit={handlerSubmit}>
					<label>
						Username
						<input
							type="text"
							value={username}
							placeholder="username"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>

					<label>
						Password
						<input
							type="password"
							value={password}
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<button className="btn">Login</button>
				</form>
			)}
			{hasLoginError && <b>Bad credentials</b>}
		</div>
	);
};
export default Login;
