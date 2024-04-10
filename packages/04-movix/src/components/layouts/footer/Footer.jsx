import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ContentWrapper from '../contentwapper/ContentWrapper';
import SocialIcon from '@/components/ui/social/SocialIcon';

import '@/assets/scss/footer.style.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					Bienvenido a Moviex, su fuente de referencia para avances y carteleras de películas.
					Explora nuestra vasta colección, encuentra tus favoritos y descubre nuevas películas
					para ver.
				</div>
				<div className="socialIcons">
					<SocialIcon Icon={FaFacebookF} />
					<SocialIcon Icon={FaInstagram} />
					<SocialIcon Icon={FaTwitter} />
					<SocialIcon Icon={FaLinkedin} />
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
