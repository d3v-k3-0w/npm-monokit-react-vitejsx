import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/index.css';
import { store } from './store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* provider -> envuelte todo nuestro app y se encarga que la store este disponible en toda la app */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
