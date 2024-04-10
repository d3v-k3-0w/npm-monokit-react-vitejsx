import { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigateTo } from '@/hooks/useNavigateTo';

const SearchInput = ({ onClose = undefined, showButton }) => {
	const [query, setQuery] = useState('');
	const navigateTo = useNavigateTo();

	const handlerSearchQuery = () => {
		if (query.length > 0) {
			navigateTo(`/search/${query}`);
			setTimeout(() => {
				//++ solo llama a onClose si se proporciona
				if (onClose) {
					onClose();
				}
			}, 1000);
		}
	};

	return (
		<div className="searchInput">
			<input
				type="text"
				placeholder="Busque una película o programa de TV..."
				onChange={(e) => setQuery(e.target.value)}
				onKeyUp={(e) => e.key === 'Enter' && handlerSearchQuery()}
			/>

			{showButton ? (
				<button onClick={handlerSearchQuery}>Buscar</button>
			) : (
				<VscChromeClose onClick={onClose} />
			)}
		</div>
	);
};

export default SearchInput;
