import styled from '@emotion/styled';
import { Link as LinkWouter } from 'wouter';

const SIZES = {
	small: '1rem',
	medium: '2rem',
	large: '3rem',
};

export const LinkStyled = styled(LinkWouter)`
	background-color: ${(props) => props.theme.colors.primary};
	border: 1px solid transparent;
	color: ${({ theme }) => theme.colors.textColor};
	cursor: pointer;
	font-size: ${(props) => SIZES[props.size]};
	padding: 0.5rem 1rem;
`;
