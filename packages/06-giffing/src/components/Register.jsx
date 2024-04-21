import '@/assets/css/modules/register.module.style.css';
import { registerService } from '@/services/registerService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

const validateFields = (values) => {
	const errors = {};

	if (!values.username) {
		errors.username = 'Required username';
	}

	if (!values.password) {
		errors.password = 'Required password';
	} else if (values.password.length < 3) {
		errors.password = 'Length must be greater than 3';
	}

	return errors;
};

const initValues = { username: '', password: '' };

const Register = () => {
	const [registered, setRegistered] = useState(false);

	if (registered) {
		return <h4>Congratulations ✨! You've been successfully registered!</h4>;
	}

	return (
		<Formik
			initialValues={initValues}
			validate={validateFields}
			onSubmit={(values, { setFieldError }) => {
				return registerService(values)
					.then(() => {
						setRegistered(true);
					})
					.catch(() => {
						setFieldError('username', 'This username is not value');
					});
			}}>
			{({ isSubmitting, errors }) => (
				<Form className="form">
					<Field
						type="text"
						className={errors.username ? 'error' : ''}
						name="username"
						placeholder="Put here the username"
					/>
					<ErrorMessage className="formError" name="username" component="small" />

					<Field
						type="password"
						className={errors.password ? 'error' : ''}
						name="password"
						placeholder="Put here the password"
					/>
					<ErrorMessage className="formError" name="password" component="small" />

					<button type="submit" disabled={isSubmitting}>
						Registrar
					</button>
				</Form>
			)}
		</Formik>
	);
};
export default Register;
