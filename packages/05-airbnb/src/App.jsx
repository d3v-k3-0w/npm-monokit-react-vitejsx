import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import MainLayout from './components/layouts/MainLayout';
import BookingPage from './pages/BookingPage';
import BookingsPage from './pages/BookingsPage';
import DetailPlacePage from './pages/DetailPlacePage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacesPage from './pages/PlacesPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<IndexPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/account" element={<ProfilePage />} />
					<Route path="/account/places" element={<PlacesPage />} />
					<Route path="/account/places/new" element={<PlacesFormPage />} />
					<Route path="/account/places/:id" element={<PlacesFormPage />} />
					<Route path="/place/:id" element={<DetailPlacePage />} />
					<Route path="/account/bookings" element={<BookingsPage />} />
					<Route path="/account/bookings/:id" element={<BookingPage />} />
				</Route>
			</Routes>
		</UserContextProvider>
	);
};

export default App;
