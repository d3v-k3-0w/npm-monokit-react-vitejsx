import { UserContext } from '@/UserContext';
import { BarsIco } from '@/assets/svg/BarsIco';
import { PlaneIco } from '@/assets/svg/PlaneIco';
import { SearchIco } from '@/assets/svg/SearchIco';
import { UserIco } from '@/assets/svg/UserIco';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const { user } = useContext(UserContext);

	return (
		<header className="flex justify-between">
			<Link to={'/'} className="flex items-center gap-1">
				<PlaneIco />
				<span className="font-bold text-xl">Airbnb</span>
			</Link>

			<div className="flex border gap-2 border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-500">
				<div>Anywhere</div>
				<div className="border-l border-gray-300"></div>
				<div>Any week</div>
				<div className="border-l border-gray-300"></div>
				<div>Add guests</div>
				<button className="bg-primary text-white p-1 rounded-full">
					<SearchIco />
				</button>
			</div>
			<Link
				to={user ? '/account' : '/login'}
				className="flex items-center border gap-2 border-gray-300 rounded-full py-2 px-4 shadow-md">
				<BarsIco />

				<div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
					<UserIco />
				</div>

				{!!user && <div>{user.name}</div>}
			</Link>
		</header>
	);
};
export default Header;
