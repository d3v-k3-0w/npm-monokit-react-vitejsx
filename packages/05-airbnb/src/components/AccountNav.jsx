import { BuildIco } from '@/assets/svg/BuildIco';
import { ListIco } from '@/assets/svg/ListIco';
import { ProfileIco } from '@/assets/svg/ProfileIco';
import { Link, useLocation } from 'react-router-dom';

const AccountNav = () => {
	const { pathname } = useLocation();

	let subpage = pathname.split('/')?.[2];

	if (subpage == undefined) {
		subpage = 'profile';
	}

	const linkClasses = (type = null) => {
		let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';

		if (type === subpage) {
			classes += ' bg-primary text-white';
		} else {
			classes += ' bg-gray-200';
		}

		return classes;
	};

	return (
		<nav className="w-full flex justify-center mt-8 mb-8 gap-4">
			<Link className={linkClasses('profile')} to={'/account'}>
				<ProfileIco />
				Mi Perfil
			</Link>
			<Link className={linkClasses('bookings')} to={'/account/bookings'}>
				<ListIco />
				Mis Reservas
			</Link>
			<Link className={linkClasses('places')} to={'/account/places'}>
				<BuildIco />
				Mis Alojamientos
			</Link>
		</nav>
	);
};
export default AccountNav;
