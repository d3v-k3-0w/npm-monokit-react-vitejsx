import React from 'react';

import HeroBanner from './herobanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './toprated/TopRated';

import '../../assets/scss/home.style.scss';

const Home = () => {
	return (
		<div className="homePage">
			<HeroBanner />
			<Trending />
			<Popular />
			<TopRated />
		</div>
	);
};

export default Home;
