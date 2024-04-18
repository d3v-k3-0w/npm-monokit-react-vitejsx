import AccountNav from '@/components/AccountNav';
import Perks from '@/components/Perks';
import PhotoUploader from '@/components/PhotoUploader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const PlacesFormPage = () => {
	const { id } = useParams();

	const [title, setTitle] = useState('');
	const [address, setAddress] = useState('');
	const [addedPhotos, setAddedPhotos] = useState([]);
	const [description, setDescription] = useState('');
	const [perks, setPerks] = useState([]);
	const [extraInfo, setExtraInfo] = useState('');
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [maxGuest, setMaxGuest] = useState(1);
	const [redirect, setRedirect] = useState(false);
	const [price, setPrice] = useState(100);

	useEffect(() => {
		if (!id) {
			return;
		}

		axios.get(`/find-place/${id}`).then(({ data }) => {
			const {
				title,
				address,
				photos,
				description,
				perks,
				extraInfo,
				checkIn,
				checkOut,
				maxGuest,
				price,
			} = data;

			setTitle(title);
			setAddress(address);
			setAddedPhotos(photos);
			setDescription(description);
			setPerks(perks);
			setExtraInfo(extraInfo);
			setCheckIn(checkIn);
			setCheckOut(checkOut);
			setMaxGuest(maxGuest);
			setPrice(price);
		});
	}, [id]);

	const inputHeader = (text) => {
		return <h2 className="text-2xl mt-4">{text}</h2>;
	};

	const inputDescription = (text) => {
		return <p className="text-gray-500 text-sm">{text}</p>;
	};

	const preInput = (header, description) => {
		return (
			<>
				{inputHeader(header)}
				{inputDescription(description)}
			</>
		);
	};

	const savePlace = async (e) => {
		e.preventDefault();

		const placeData = {
			title,
			address,
			addedPhotos,
			description,
			perks,
			extraInfo,
			checkIn,
			checkOut,
			maxGuest,
			price,
		};

		if (id) {
			await axios.put('/update-place', {
				id,
				...placeData,
			});

			setRedirect(true);
		} else {
			const placeData = {
				title,
				address,
				addedPhotos,
				description,
				perks,
				extraInfo,
				checkIn,
				checkOut,
				maxGuest,
				price,
			};

			await axios.post('/add-places', placeData);

			setRedirect(true);
		}
	};

	if (redirect) {
		return <Navigate to={'/account/places'} />;
	}

	return (
		<div>
			<AccountNav />

			<form onSubmit={savePlace}>
				{preInput(
					'Title',
					'title for your place. should be short and catchy as in advertisement'
				)}
				<input
					type="text"
					value={title || ''}
					placeholder="title, for example: My Lovely apartment"
					onChange={(e) => setTitle(e.target.value)}
				/>

				{preInput('Address', 'Address to this place')}
				<input
					type="text"
					value={address || ''}
					placeholder="address"
					onChange={(e) => setAddress(e.target.value)}
				/>

				{preInput('Photos', 'more = better')}
				<PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

				{preInput('Description', 'description of the place')}
				<textarea
					value={description || ''}
					onChange={(e) => setDescription(e.target.value)}></textarea>

				{preInput('Perks', 'select all the perks of your place')}
				<div className="grid mt-2 gap-2 grid-col-2 md:grid-cols-3 lg:grid-cols-6">
					<Perks selected={perks} onChange={setPerks} />
				</div>

				{preInput('Extra info', 'house rules, etc')}
				<textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)}></textarea>

				{preInput(
					'Check in&out times',
					'add check in and out times, remember to have some time window for cleaning the room between guests'
				)}
				<div className="grid gap-2 grid-cols-2 md:grid-columns-4">
					<div className="">
						<h3 className="mt-2 -mb-1">Check in time</h3>
						<input
							type="text"
							value={checkIn || ''}
							placeholder="14:00"
							onChange={(e) => setCheckIn(e.target.value)}
						/>
					</div>
					<div className="">
						<h3 className="mt-2 -mb-1">Check out time</h3>
						<input
							type="text"
							value={checkOut || ''}
							placeholder="11:00"
							onChange={(e) => setCheckOut(e.target.value)}
						/>
					</div>
					<div className="">
						<h3 className="mt-2 -mb-1">Max number of guests</h3>
						<input
							type="number"
							value={maxGuest || ''}
							onChange={(e) => setMaxGuests(e.target.value)}
						/>
					</div>
					<div className="">
						<h3 className="mt-2 -mb-1">Price per night</h3>
						<input
							type="number"
							value={price || ''}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
				</div>

				<button className="primary my-4">Save</button>
			</form>
		</div>
	);
};
export default PlacesFormPage;
