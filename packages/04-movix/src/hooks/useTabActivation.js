import { useState } from 'react';

export const useTabActivation = (initialTab = 0) => {
	const [selectedTab, setSelectedTab] = useState(initialTab);
	const [left, setLeft] = useState(initialTab * 100);

	const activateTab = (index) => {
		setLeft(index * 100);
		setTimeout(() => {
			setSelectedTab(index);
		}, 300);
	};

	return { selectedTab, left, activateTab };
};
