import React from 'react';
import { useTabActivation } from '@/hooks/useTabActivation';

import '@/assets/scss/switchtabs.style.scss';

const SwitchTabs = ({ data, onTabChange }) => {
	const { selectedTab, left, activateTab } = useTabActivation();

	return (
		<div className="switchingTabs">
			<div className="tabItems">
				{data.map((tab, index) => (
					<span
						className={`tabItem ${selectedTab === index ? 'active' : ''} `}
						key={tab} // Usamos el nombre de la pestaña como clave
						onClick={() => {
							activateTab(index);
							onTabChange(tab, index);
						}}>
						{tab}
					</span>
				))}
				<span className="movingBg" style={{ left }} />
			</div>
		</div>
	);
};

export default SwitchTabs;
