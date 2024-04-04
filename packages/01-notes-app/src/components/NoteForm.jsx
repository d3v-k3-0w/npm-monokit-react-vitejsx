import { useRef, useState } from 'react';
import Toggable from './Toggable';

const NoteForm = ({ addNote, handlerLogout }) => {
	const [newNote, setNewNote] = useState('');
	const [newTitle, setNewTitle] = useState('');

	//++ el useRef es un Hook que te permite guardar un obj a una referencia que no va cambiar entre renders
	const toggableRef = useRef();

	const handlerChange = (e) => {
		setNewNote(e.target.value);
	};

	const handlerChangeTitle = (e) => {
		setNewTitle(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		//++ crear el objeto de notes
		const noteObject = {
			title: newTitle,
			content: newNote,
			important: Math.random() < 0.5,
		};

		addNote(noteObject);
		setNewNote('');
		setNewTitle('');
		//++ valor actual del toggableRef
		toggableRef.current.toggleVisibility();
	};

	console.log(toggableRef);

	return (
		// personalizando la prop buttonLabel
		// {/* ref es una prop especial que guarda la referencia de los elementos del Dom y tbn de componentes(mas complicado)*/}
		<Toggable buttonLabel="New Note" ref={toggableRef}>
			<h3>Create a new Note</h3>

			<form onSubmit={handlerSubmit}>
				<input placeholder="Write your note title" type="text" onChange={handlerChangeTitle} />
				<input placeholder="Write your note content" type="text" onChange={handlerChange} />
				<button type="submit">Save</button>
			</form>
			<div>
				<button onClick={handlerLogout}>Loggout</button>
			</div>
		</Toggable>
	);
};

export default NoteForm;
