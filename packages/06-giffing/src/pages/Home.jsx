import '@/assets/css/modules/home.module.style.css';
import { useCallback, useState } from 'react';

import { Link, useLocation } from 'wouter';
import ListOfGifs from '@/components/ListOfGifs';
import { useGifs } from '@/hooks/useGifs';
import LazyTrending from '@/components/LazyTrending';
import SearchForm from '@/components/SearchForm';
import { Helmet } from 'react-helmet';
// import TrendingSearches from '@/components/TrendingSearches';

const CATEGORIAS = ['panda', 'rick', 'memes'];

const Home = () => {
	const { loading, gifs } = useGifs();

	return (
		<>
			<Helmet>
				<title>Home || Giffing</title>
			</Helmet>

			<SearchForm />

			<div className="homeWrapper">
				<div className="homeMain">
					<h3 className="homeTitle">Categorias:</h3>

					<ul className="categoriasGifList">
						{CATEGORIAS.map((cat) => (
							<li key={cat}>
								<Link to={`/search/${cat}`}>{cat}</Link>
							</li>
						))}
					</ul>
					<div className="homeResults">
						<h3 className="appTitle">Ultima búsqueda</h3>

						<ListOfGifs accGifs={gifs} />
					</div>
					<div className="popularGifs">
						<LazyTrending />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
