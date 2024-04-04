import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './assets/css/App.css';
import { useStore } from 'react-redux';

import { actionDecremented, actionIncremented, actionReset } from './main';

const App = () => {
	const store = useStore();
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>{store.getState()}</h1>
			<div className="card">
				<button onClick={() => store.dispatch(actionIncremented)}>+</button>
				<button onClick={() => store.dispatch(actionReset)}>Reset</button>
				<button onClick={() => store.dispatch(actionDecremented)}>-</button>

				<p>
					Edited for <code>dev-k-ow</code> ✨
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
};

export default App;
