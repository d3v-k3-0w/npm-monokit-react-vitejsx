import { useNavigate } from 'react-router-dom';

export const useNavigateTo = () => {
	const navigate = useNavigate();

	const navigateTo = (path, mediaType, id) => {
		if (mediaType && id) {
			navigate(`/${mediaType}/${id}`);
		} else {
			navigate(path);
		}
	};

	return navigateTo;
};
