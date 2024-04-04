import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Notes from './Notes';
import NoteDetail from './components/NoteDetail';
import { useNotes } from './hooks/useNotes';

import Container from '@mui/material/Container';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';

const Home = () => <h1>Home Page</h1>;

const Users = () => <h1>Users</h1>;

const LinkButton = (props) => <Button color="inherit" component={Link} {...props} />;

const App = () => {
	// const [notes, setNotes] = useState([]);

	// useEffect(() => {
	// 	noteSrvc.getAllNotes().then((notes) => {
	// 		setNotes(notes);
	// 	});
	// }, []);

	//++ reemplazar y reutilizar mi custom hook useNotes
	const { notes } = useNotes();

	return (
		<BrowserRouter>
			<Container>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu" />
						<header>
							<LinkButton to="/">Home</LinkButton>
							<LinkButton to="/notes">Notes</LinkButton>
							<LinkButton to="/users">Users</LinkButton>
						</header>
					</Toolbar>
				</AppBar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<Users />} />
					<Route path="/notes" element={<Notes />} />
					<Route path="/notes/:noteId" element={<NoteDetail notes={notes} />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default App;
