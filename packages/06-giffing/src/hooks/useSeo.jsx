import { useEffect, useRef } from 'react';

export const useSeo = ({ description, title }) => {
	const prevTitle = useRef(document.title);
	const prevDescription = useRef(
		document.querySelector('meta[name="description"]').getAttribute('content')
	);

	//solo ejecuta este codigo cuando el title que llega como parametro cambia
	useEffect(() => {
		const previousTitle = prevTitle.current;

		if (title) {
			document.title = `${title} | Giffing`;
		}

		return () => (document.title = previousTitle);
	}, [title]);

	useEffect(() => {
		let metaDescription = document.querySelector('meta[name="description"]');
		const previousDescription = prevDescription.current;

		if (!metaDescription) {
			metaDescription = document.createElement('meta');
			metaDescription.setAttribute('name', 'description');
			document.head.appendChild(metaDescription);
		}

		if (description) {
			metaDescription.setAttribute('content', description);
		}

		return () => metaDescription.setAttribute('content', previousDescription);
	}, [description]);
};
