import { LinkStyled } from '@/assets/style/buttonStyled';

const ButtonBack = ({ children, href, size = 'small' }) => {
	return href ? (
		<LinkStyled href={href} size={size}>
			{children}
		</LinkStyled>
	) : (
		<button size={size}>children</button>
	);
};
export default ButtonBack;
