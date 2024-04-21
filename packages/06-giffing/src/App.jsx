import '@/assets/css/modules/app.module.style.css';
import Footer from '@/components/Footer';
import Toolbar from '@/components/Toolbar';
import { GifsContextProvider } from '@/context/GifsContext';
import { UserContextProvider } from '@/context/UserContext';
import Detail from '@/pages/Detail';
import LoginPage from '@/pages/LoginPage';
import SearchResults from '@/pages/SearchResults';
import React, { Suspense } from 'react';
import { Route } from 'wouter';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

const homePage = React.lazy(() => import('@/pages/Home'));

const App = () => {
	return (
		<UserContextProvider>
			<Toolbar />
			<div className="app">
				<Suspense fallback={null}>
					<section className="appContent">
						<h1>GIFFING</h1>

						<GifsContextProvider>
							<Route path="/" component={homePage} />
							<Route path="/search/:keyword/:rating?" component={SearchResults} />
							<Route path="/gif/:id" component={Detail} />
							<Route path="/login" component={LoginPage} />
							<Route path="/register" component={RegisterPage} />
							<Route path="/404" component={NotFoundPage} />
						</GifsContextProvider>
					</section>
				</Suspense>
			</div>

			<Footer />
		</UserContextProvider>
	);
};
export default App;
