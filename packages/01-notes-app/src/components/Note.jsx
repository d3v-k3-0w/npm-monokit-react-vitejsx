import { TableCell } from '@mui/material';
import { Link } from 'react-router-dom';

const Note = ({ id, title, content, date }) => {
	return (
		<TableCell>
			<h2>{title}</h2>
			<li>
				<Link to={`/notes/${id}`}>{content}</Link>
				<small>
					<time>{date}</time>
				</small>
			</li>
		</TableCell>
	);
};

export default Note;
