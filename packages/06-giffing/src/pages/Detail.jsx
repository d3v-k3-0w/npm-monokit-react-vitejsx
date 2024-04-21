import Gif from '@/components/Gif';
import { useSingleGif } from '@/hooks/useSingleGif';
import Spinner from '@/components/Spinner';
import { Redirect } from 'wouter';
import { useSeo } from '@/hooks/useSeo';
import { Helmet } from 'react-helmet';

const Detail = ({ params }) => {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id });

	const title = gif ? gif.title : '';

	// useSeo({ description: `Detail of ${title}`, title });

	if (isLoading) {
		return (
			<>
				<Helmet>
					<title>Cargando...</title>
				</Helmet>

				<Spinner />
			</>
		);
	}
	if (isError) return <Redirect to="/404" />;

	if (!gif) return null;

	return (
		<>
			<Helmet>
				<title>{title} || Giffing</title>
			</Helmet>

			<div>
				<Gif accId={gif.id} accUrl={gif.url} accTitle={gif.title} />
			</div>
		</>
	);
};

export default Detail;
