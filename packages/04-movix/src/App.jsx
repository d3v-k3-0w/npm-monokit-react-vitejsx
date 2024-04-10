import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/layouts/header/Header';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchresult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Footer from './components/layouts/footer/Footer';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration, getGenres } from './store/homeSlice';

const App = () => {
	const dispatch = useDispatch();
	const { url } = useSelector((state) => state.home);

	useEffect(() => {
		fetchApiConfig();
		genresCall();
	}, []);

	const fetchApiConfig = () => {
		fetchDataFromApi('/configuration').then((res) => {
			const url = {
				backdrop: `${res.images.secure_base_url}original`,
				poster: `${res.images.secure_base_url}original`,
				profile: `${res.images.secure_base_url}original`,
			};
			dispatch(getApiConfiguration(url));
		});
	};

	const genresCall = async () => {
		let promises = [];
		let endpoints = ['tv', 'movie'];
		let allGenres = {};

		endpoints.forEach((url) => {
			promises.push(fetchDataFromApi(`/genre/${url}/list`));
		});

		const data = await Promise.all(promises);
		// console.log(data);

		data.map(({ genres }) => {
			return genres?.map((item) => (allGenres[item.id] = item));
		});

		// console.log(allGenres);

		dispatch(getGenres(allGenres));
	};

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:mediaType/:id" element={<Details />} />
				<Route path="/search/:query" element={<SearchResult />} />
				<Route path="/explore/:mediaType" element={<Explore />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
