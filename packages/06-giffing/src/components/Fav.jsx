import '@/assets/css/modules/fav.module.style.css';
import { useUser } from '@/hooks/useUser';
import { useState } from 'react';
import { useLocation } from 'wouter';
import Login from './Login';
import ModalPortal from './Modal';

const Fav = ({ id }) => {
	const [showModal, setShowModal] = useState(false);

	const { isLogged, addFav, favs } = useUser();

	const [, navigate] = useLocation();

	const isFaved = favs.some((favId) => favId === id);

	const handlerClick = () => {
		if (!isLogged) return setShowModal(true);

		isLogged && addFav({ id });
	};

	const handlerClose = () => {
		setShowModal(false);
	};

	const handlerLogin = () => {
		setShowModal(false);
	};

	const [label, emoji] = isFaved
		? ['Remove Gif from favorites', '❌']
		: ['Add Gif to favorites', '💜'];

	return (
		<>
			<button className="favGif" onClick={handlerClick}>
				<span aria-label={label} role="img">
					{emoji}
				</span>
			</button>

			{showModal && (
				<ModalPortal onClose={handlerClose}>
					<Login onLogin={handlerLogin} />
				</ModalPortal>
			)}
		</>
	);
};
export default Fav;
