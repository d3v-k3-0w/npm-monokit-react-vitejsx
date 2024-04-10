import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreatedNote } from '../reducers/noteReducer';

const NewNote = () => {
	const dispatch = useDispatch();

	const addNote = async (e) => {
		e.preventDefault();

		const { target } = e;

		const title = target.title.value;
		const content = target.note.value;

		target.note.title = '';
		target.note.value = '';

		dispatch(actionCreatedNote(title, content));
	};

	return (
		<form onSubmit={addNote}>
			<input type="text" name="title" placeholder="title" />
			<input type="text" name="note" placeholder="content" />
			<button>Add</button>
		</form>
	);
};

export default NewNote;
