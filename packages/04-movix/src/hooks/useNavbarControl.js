import { useState, useEffect } from 'react';

export const useNavbarControl = () => {
	const [show, setShow] = useState('top');
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY) {
				setShow('hide');
			} else {
				setShow('show');
			}
		} else {
			setShow('top');
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	return show;
};
