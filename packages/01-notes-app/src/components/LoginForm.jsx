import { useState } from 'react';
import Toggable from './Toggable';

const useField = ({ type }) => {
	const [value, setvalue] = useState('');

	const onChange = (e) => {
		setvalue(e.target.value);
	};

	return {
		type,
		value,
		onChange,
	};
};

const LoginForm = ({ handlerLoginSubmit, ...props }) => {
	const emailField = useField({ type: 'email' });
	const passField = useField({ type: 'password' });

	return (
		// personalizando la prop buttonLabel
		<Toggable buttonLabel="Show login">
			<form onSubmit={handlerLoginSubmit}>
				<div>
					<input {...emailField} name="email" placeholder="Email" />
				</div>
				<div>
					<input {...passField} name="password" placeholder="Password" />
				</div>

				<button>Iniciar</button>
			</form>
		</Toggable>
	);
};

export default LoginForm;
