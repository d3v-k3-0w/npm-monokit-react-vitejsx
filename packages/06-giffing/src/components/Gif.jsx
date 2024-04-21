import '@/assets/css/modules/gif.module.style.css';
import React from 'react';
import { Link } from 'wouter';
import Fav from './Fav';

const Gif = ({ accId, accUrl, accTitle }) => {
	return (
		<div className="gif">
			<div className="gifButtons">
				<Fav id={accId}></Fav>
			</div>
			<Link to={`/gif/${accId}`} className="gifLink">
				<img src={accUrl} alt={accTitle} />
				<h4>{accTitle}</h4>
			</Link>
		</div>
	);
};

export default React.memo(Gif);
