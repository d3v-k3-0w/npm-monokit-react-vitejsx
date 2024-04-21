import '@/assets/css/modules/spinner.module.style.css';
import React from 'react';

const Spinner = () => {
	return (
		<>
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</>
	);
};

export default Spinner;
