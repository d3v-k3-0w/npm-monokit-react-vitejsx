import { getAllNotes } from '../services/noteService.js';
import { createNote } from '../services/noteService';

//++ el reducer es una maquina de state , se pasa un state y te devuelve un nuevo state
export const noteReducer = (state = [], action) => {
	console.log('ACTION', action);

	if (action.type === '@note/init') {
		return action.payload;
	}

	if (action.type === '@note/created') {
		// return state.concat(action.payload);
		return [...state, action.payload];
	}

	if (action.type === '@note/toggle_important') {
		const { id } = action.payload;
		return state.map((note) => {
			if (note.id === id) {
				//++ hacer una copia de todas la notes y cambiar el valor del important
				return {
					...note,
					important: !note.important,
				};
			}
			return note;
		});
	}

	return state;
};

//++ Actions Creators
export const actionInitNote = () => {
	//++ middleware , redux thunk permite que nuestro reducer pueda tener action creators de devuelvan una fun async
	return async (dispatch) => {
		const notes = await getAllNotes();

		dispatch({
			type: '@note/init',
			payload: notes,
		});
	};
};

export const actionCreatedNote = (title, content) => {
	return async (dispatch) => {
		const newNote = await createNote(title, content);

		dispatch({
			type: '@note/created',
			payload: newNote,
		});
	};
};

export const actionToggleImportanceOf = (id) => {
	return {
		type: '@note/toggle_important',
		payload: {
			id,
		},
	};
};
