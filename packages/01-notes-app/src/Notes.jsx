import './assets/css/App.css';

import { useState } from 'react';

import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import Note from './components/Note';

import NoteForm from './components/NoteForm';
import { useUser } from './hooks/useUser';
import { useNotes } from './hooks/useNotes';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';

const Notes = () => {
	const { notes, addNote, loading } = useNotes();

	const [error, setError] = useState(null);

	const [authValues, setAuthValues] = useState({
		email: '',
		password: '',
	});

	const { user, loginUser, logout } = useUser();

	const handlerLoginSubmit = async (e) => {
		e.preventDefault();

		const error = await loginUser(authValues);
		if (error) {
			setError(error);
			setTimeout(() => {
				setError(null);
			}, 5000);
		}
	};

	const handlerLogout = () => {
		logout();
	};

	return (
		<div>
			<h1 className="Hacking">NOTES APP</h1>

			<Notification message={error} />

			{user ? (
				// pasando el metodo addNote como prop
				<NoteForm addNote={addNote} handlerLogout={handlerLogout} />
			) : (
				<LoginForm
					handlerLoginSubmit={handlerLoginSubmit}
					handlerEmailChange={(e) =>
						setAuthValues({ ...authValues, [e.target.name]: e.target.value })
					}
					handlerPasswordChange={(e) =>
						setAuthValues({ ...authValues, [e.target.name]: e.target.value })
					}
				/>
			)}

			{loading ? 'Cargando...' : ''}

			<TableContainer>
				<Table>
					<TableBody>
						{notes.map((itemNote) => (
							<TableRow>
								<Note key={itemNote.id} {...itemNote} />
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Notes;
