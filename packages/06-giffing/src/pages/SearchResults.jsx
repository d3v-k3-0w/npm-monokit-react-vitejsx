import { useGifs } from '@/hooks/useGifs';
import ListOfGifs from '@/components/ListOfGifs';
import Spinner from '@/components/Spinner';
import { useNearScreen } from '@/hooks/useNearScreen';
import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
import { useSeo } from '@/hooks/useSeo';
import { Helmet } from 'react-helmet';
import SearchForm from '@/components/SearchForm';

const SearchResults = ({ params }) => {
	const { keyword, rating = 'g' } = params;
	const { loading, gifs, setPage } = useGifs({ keyword, rating });

	const externalRef = useRef();

	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	});

	const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';

	// useSeo({ title });

	// const handlerNextPage = () => setPage((prevPage) => prevPage + 1);

	const debounceHandlerNextPage = useCallback(
		debounce(() => setPage((prevPage) => prevPage + 1), 200),
		[setPage]
	);

	useEffect(() => {
		console.log(isNearScreen);
		if (isNearScreen) debounceHandlerNextPage();
	}, [debounceHandlerNextPage, isNearScreen]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<Helmet>
						<title>{title} || Giffing </title>
						<meta name="description" content={title} />
						<meta name="rating" content="General" />
					</Helmet>

					<SearchForm initialKeyword={keyword} initialRating={rating} />

					<h3>{decodeURI(keyword)}</h3>
					{/* <button onClick={handlerNextPage}>Get next Page</button> */}
					<br />
					<ListOfGifs accGifs={gifs} />

					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	);
};

export default SearchResults;
