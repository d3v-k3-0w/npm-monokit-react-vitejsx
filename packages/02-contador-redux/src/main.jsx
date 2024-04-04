import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const actionIncremented = {
	type: '@counter/incremented',
};

export const actionDecremented = {
	type: '@counter/decremented',
};

export const actionReset = {
	type: '@counter/reseted',
};

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case '@counter/incremented':
			return state + 1;
		case '@counter/decremented':
			return state - 1;
		case '@counter/reseted':
			return 0;
		default:
			return state;
	}
};

// crea un store Redux con el reducer counterReducer
const store = createStore(
	counterReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//++ almacena la instancia de root (ReactDOM.createRoot)
let root = null;

const renderApp = () => {
	//++ si root no existe(1er render), se crea una nueva instancia y se almacena la variable
	if (!root) {
		root = ReactDOM.createRoot(document.getElementById('root'));
	}

	//++ si existe solo se renderiza la aplicacion dentro del root
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
};

renderApp(); // renderiza la aplicación por primera vez

//++ suscríbete a los cambios en el estado de Redux y vuelve a renderizar la aplicación
store.subscribe(renderApp);
