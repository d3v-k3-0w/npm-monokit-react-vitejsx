import { useForm } from '@/hooks/useForm';
import { useLocation } from 'wouter';
import React from 'react';
import { FormContainer, InputSearch, Select } from '@/assets/style/searchStyled';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {
	const [path, pushLocation] = useLocation();
	// la magia es que aquí estamos actualizando el estado del componente padre
	// const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));

	// const [rating, setRating] = useState(initialRating);

	// const [times, setTimes] = useState(0);

	const { keyword, rating, times, updateKeyword, updateRating } = useForm({
		initialKeyword,
		initialRating,
	});

	const handlerChange = (e) => {
		updateKeyword(e.target.value);
	};
	const handlerSubmit = (e) => {
		e.preventDefault();

		pushLocation(`/search/${keyword}/${rating}`);
	};

	const handlerChangeRaiting = (e) => {
		updateRating(e.target.value);
	};

	return (
		<FormContainer onSubmit={handlerSubmit}>
			<button>Buscar</button>
			<InputSearch
				type="text"
				value={keyword}
				placeholder="Search a gif here..."
				onChange={handlerChange}
			/>

			<Select value={rating} onChange={handlerChangeRaiting}>
				<option disabled>Rating type</option>
				{RATINGS.map((rating) => (
					<option key={rating}>{rating}</option>
				))}
			</Select>
			{/* <small>{times}</small> */}
		</FormContainer>
	);
};

export default React.memo(SearchForm);
