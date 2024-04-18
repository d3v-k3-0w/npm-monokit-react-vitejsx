import { PlusIco } from '@/assets/svg/PlusIco';
import AccountNav from '@/components/AccountNav';
import PlaceImg from '@/components/PlaceImg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlacesPage = () => {
	const [places, setPlaces] = useState([]);

	useEffect(() => {
		axios.get('/all-places-user').then(({ data }) => {
			setPlaces(data);
		});
	}, []);

	return (
		<div>
			<AccountNav />

			<div className="text-center">
				<Link
					className="bg-primary inline-flex gap-1 text-white py-2 px-6 rounded-full"
					to={'/account/places/new'}>
					<PlusIco />
					Add new place
				</Link>
			</div>
			<div className="mt-4">
				{places.length > 0 &&
					places.map((place) => (
						<Link
							className=" flex cursor-pointer bg-gray-100 gap-4 p-4 rounded-2xl"
							to={`/account/places/${place._id}`}
							key={place.title}>
							<div className="flex w-32 rounded-xl h-32 bg-gray-300 grow shrink-0">
								<PlaceImg place={place} />
							</div>

							<div className="grow-0 shrink">
								<h2 className="text-xl">{place.title}</h2>
								<p className="text-sm mt-2">{place.description}</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};
export default PlacesPage;
