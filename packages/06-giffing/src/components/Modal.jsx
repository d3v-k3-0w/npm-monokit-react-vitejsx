import '@/assets/css/modules/modal.module.style.css';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
	return (
		<div className="modal">
			<div className="modalContent">
				<button className="modalBtn" onClick={onClose}>
					✖
				</button>
				{children}
			</div>
		</div>
	);
};

const ModalPortal = ({ children, onClose }) => {
	return ReactDOM.createPortal(
		<Modal onClose={onClose}>{children}</Modal>,
		document.getElementById('modal-root')
	);
};

export default ModalPortal;
