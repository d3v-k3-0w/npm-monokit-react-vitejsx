import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import ContentWrapper from '../contentwapper/ContentWrapper';
import { useNavbarControl } from '@/hooks/useNavbarControl';
import SearchInput from '@/components/ui/searchinput/SearchInput';
import { useNavigateTo } from '@/hooks/useNavigateTo';

import logo from '@/assets/svg/movix-logo.svg';
import '@/assets/scss/header.style.scss';

const Header = () => {
	const [uiState, setUiState] = useState('default');
	const navigateTo = useNavigateTo();
	const show = useNavbarControl();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const handlerNavigation = (type) => {
		navigateTo(`/explore/${type}`);
	};

	return (
		<header className={`header ${uiState === 'mobileMenu' ? 'mobileView' : ''} ${show}`}>
			<ContentWrapper>
				<div className="logo">
					<img src={logo} alt="logo" onClick={() => navigateTo('/')} />
				</div>
				<ul className="menuItems">
					<li className="menuItem" onClick={() => handlerNavigation('movie')}>
						Películas
					</li>
					<li className="menuItem" onClick={() => handlerNavigation('tv')}>
						TV
					</li>
					<li className="menuItem">
						<HiOutlineSearch onClick={() => setUiState('search')} />
					</li>
				</ul>

				<div className="mobileMenuItems">
					<HiOutlineSearch onClick={() => setUiState('search')} />

					{uiState === 'mobileMenu' ? (
						<VscChromeClose onClick={() => setUiState('default')} />
					) : (
						<SlMenu onClick={() => setUiState('mobileMenu')} />
					)}
				</div>
			</ContentWrapper>

			{uiState === 'search' && (
				<div className="searchBar">
					<ContentWrapper>
						<SearchInput onClose={() => setUiState('default')} showButton={false} />
					</ContentWrapper>
				</div>
			)}
		</header>
	);
};

export default Header;
