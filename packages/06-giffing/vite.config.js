import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
		}),
	],
	optimizeDeps: {
		include: ['@emotion/react', '@emotion/styled'],
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), // Establece alias para @/
			// './': `${resolve(__dirname, 'src')}/`, // Establece alias para ./
		},
	},
});
