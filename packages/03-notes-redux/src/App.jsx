import { useEffect } from 'react';
import './assets/css/App.css';
import NewNote from './components/NewNote';
import Notes from './components/Notes';

import { useDispatch } from 'react-redux';
import { actionInitNote } from './reducers/noteReducer.js';

const App = () => {
	const dispatch = useDispatch();

	//++ cuando la App se monta por primera vez
	useEffect(() => {
		dispatch(actionInitNote());
	}, [dispatch]);

	const filterSelected = (value) => {
		console.log(value);
	};

	return (
		<div>
			<NewNote />

			<div>
				all
				<input type="radio" name="filter" onChange={() => filterSelected('ALL')} />
				important
				<input type="radio" name="filter" onChange={() => filterSelected('IMPORTANT')} />
				no important
				<input type="radio" name="filter" onChange={() => filterSelected('NO IMPORTANT')} />
			</div>

			<Notes />
		</div>
	);
};

export default App;
