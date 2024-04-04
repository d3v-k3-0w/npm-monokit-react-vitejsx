import { useEffect, useState } from 'react';
import noteSrvc from '../services/noteService';

export const useNotes = () => {
	const [notes, setNotes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		noteSrvc.getAllNotes().then((notes) => {
			setNotes(notes);
			setLoading(false);
		});
	}, []);

	const addNote = (noteObject) => {
		noteSrvc
			.createNote(noteObject)
			.then((newNote) => {
				setNotes((prevNotes) => prevNotes.concat(newNote));
			})
			.catch((error) => {
				console.error(error);
				setError('La API ha Fallado');
			});
	};

	return {
		notes,
		addNote,
		loading,
	};
};
