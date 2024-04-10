import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import '@/assets/scss/circlerating.style.scss';

const getPathColor = (rating) => {
	if (rating < 5) {
		return 'red';
	} else if (rating < 7) {
		return 'orange';
	} else {
		return 'green';
	}
};

const CircleRating = ({ rating }) => {
	return (
		<div className="circleRating">
			<CircularProgressbar
				value={rating}
				maxValue={10}
				text={rating}
				styles={buildStyles({
					pathColor: getPathColor(rating),
				})}
			/>
		</div>
	);
};

export default CircleRating;
