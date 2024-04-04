import React from 'react';
import { useParams } from 'react-router-dom';

const NoteDetail = ({ notes }) => {
	//++ recuperar el param noteId de la url
	const { noteId } = useParams();

	const note = notes.find((note) => note.id === noteId);

	if (!note) return null;

	console.log(note);

	return (
		<div>
			<h3>{note.content}</h3>
			<div>{note?.user?.name}</div>
			<div>
				<strong>{note.important ? 'important' : ''}</strong>
			</div>
		</div>
	);
};

export default NoteDetail;
