import { useDispatch, useSelector } from 'react-redux';
import { actionToggleImportanceOf } from '../reducers/noteReducer';

//++ componente fool o de presentacion
const Note = ({ note, onToggleImportant }) => {
	return (
		<div key={note.id}>
			<h3>{note.title}</h3>
			<li>{note.content}</li>
			<strong onClick={() => onToggleImportant(note.id)}>
				{note.important ? 'important' : 'not important'}
			</strong>
		</div>
	);
};

const Notes = () => {
	//++ seleccionar una rebanada del estado, en este caso esta seleccionando todas las notes
	const notes = useSelector((state) => state.notes);

	console.log(notes);

	const dispatch = useDispatch();

	const toggleImportant = (id) => {
		dispatch(actionToggleImportanceOf(id));
	};

	return (
		<>
			{notes && notes.length > 0 ? (
				notes.map((note) => (
					<Note key={note.id} note={note} onToggleImportant={toggleImportant} />
				))
			) : (
				<p>No hay notas creadas aún</p>
			)}
		</>
	);
};

export default Notes;
