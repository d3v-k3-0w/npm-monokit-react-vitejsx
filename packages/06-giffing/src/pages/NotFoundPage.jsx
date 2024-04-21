import ButtonBack from '@/components/ButtonBack';
import SearchForm from '@/components/SearchForm';
import { css } from '@emotion/react'; // Importa jsx
import { Helmet } from 'react-helmet';

const gifsErrors = [
	'd2jjuAZzDSVLZ5kI',
	'Bp3dFfoqpCKFyXuSzP',
	'hv5AEBpH3ZyNoRnABG',
	'hLwSzlKN8Fi6I',
];

const pageErrorStyles = css({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem',
	textAlign: 'center',
});

const codeErrorStyles = css({
	fontSize: '5rem',
	fontWeight: 'bold',
	fontStyle: 'italic',
	background: 'red',
});

const msgErrorStyles = css({
	fontSize: '1.5rem',
	margin: '1rem 0',
});

const gifErrorStyles = css({
	margin: '1rem auto',
	width: '250px',
	height: '250px',
	objectFit: 'fill',
	'&:hover': {
		transform: 'scale(1.1)',
	},
});

const NotFoundPage = () => {
	const randomImage = () => {
		const randomIndex = Math.floor(Math.random() * gifsErrors.length);
		return `https://media.giphy.com/media/${gifsErrors[randomIndex]}/giphy.gif`;
	};

	return (
		<>
			<Helmet>
				<title>Error 404 | Giffy</title>
			</Helmet>
			<header className="o-header">
				<SearchForm />
			</header>
			<div className="App-wrapper">
				<div css={pageErrorStyles}>
					<span css={codeErrorStyles}>404</span>
					<span css={msgErrorStyles}>Sometimes getting lost isn't that bad</span>
					<img css={gifErrorStyles} src={randomImage()} alt="alt-page-404" />
					<ButtonBack href="/">Go back Home</ButtonBack>
				</div>
			</div>
		</>
	);
};
export default NotFoundPage;
