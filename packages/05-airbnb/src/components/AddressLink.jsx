import { MapIco } from '@/assets/svg/MapIco';

const AddressLink = ({ children, className = null }) => {
	if (!className) {
		className = 'my-3 block';
	}

	className += ' flex gap-1 font-semibold underline';

	return (
		<a href={`https://maps.google.com/?q=${children}`} className={className} target="_blank">
			<MapIco />
			{children}
		</a>
	);
};
export default AddressLink;
