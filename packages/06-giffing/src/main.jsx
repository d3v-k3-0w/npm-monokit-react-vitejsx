import '@/assets/css/global.style.css';
import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { theme } from './assets/style/mainStyled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
