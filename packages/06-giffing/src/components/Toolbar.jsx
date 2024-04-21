import '@/assets/css/modules/toolbar.module.style.css';
import { useUser } from '@/hooks/useUser';
import { Link, useRoute } from 'wouter';

const Toolbar = () => {
	// const isLogged = false;

	const { isLogged, logout } = useUser();
	const [match] = useRoute('/login');

	const handlerClick = (e) => {
		e.preventDefault();
		logout();
	};

	const renderButtons = ({ isLogged }) => {
		return isLogged ? (
			<Link to="#" onClick={handlerClick}>
				Logout
			</Link>
		) : (
			<>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</>
		);
	};

	const content = match ? null : renderButtons({ isLogged });

	return (
		//++ no puede haber un componente Header cuando haces uso de la etiqueta Header (referencia cíclica)
		//++ recordar que header es la etiqueta
		<header className="gfHeader">{content}</header>
	);
};
export default Toolbar;
