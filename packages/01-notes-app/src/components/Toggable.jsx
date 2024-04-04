import { forwardRef, useImperativeHandle, useState } from 'react';

// envolver con forwardRef que es un metodo especial y hace que un componente fun lleve una ref hacia arriba(padre)
const Toggable = forwardRef(({ children, buttonLabel }, ref) => {
	const [visible, setVisible] = useState(false);

	//++ styles en linea
	const hideWhenVisible = { display: visible ? 'none' : '' };
	const showWhenVisible = { display: visible ? '' : 'none' };

	const toggleVisibility = () => setVisible(!visible);

	//++ useImperativeHandle es un hook que se usa para definir funs en un comp que se puede invocar desde afuera
	useImperativeHandle(ref, () => {
		//++ lo que devolvemos aqui es lo que se guarda en la ref
		return {
			toggleVisibility,
		};
	});

	return (
		<div>
			<div style={hideWhenVisible}>
				<button onClick={toggleVisibility}>{buttonLabel}</button>
			</div>

			<div style={showWhenVisible}>
				{/* para mostrar el hijo del toggable */}
				{children}
				<button onClick={toggleVisibility}>Cancelar</button>
			</div>
		</div>
	);
});

export default Toggable;
