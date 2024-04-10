import ContentWrapper from '@/components/layouts/contentwapper/ContentWrapper';
import '../../assets/scss/404.style.scss';

const PageNotFound = () => {
	return (
		<div className="pageNotFound">
			<ContentWrapper>
				<span className="bigText">404</span>
				<span className="smallText">Page not found!</span>
			</ContentWrapper>
		</div>
	);
};

export default PageNotFound;
