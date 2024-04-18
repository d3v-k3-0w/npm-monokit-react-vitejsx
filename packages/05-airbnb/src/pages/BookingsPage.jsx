import { CalendarIco } from '@/assets/svg/CalendarIco';
import { CreditIco } from '@/assets/svg/CreditIco';
import MoonIco from '@/assets/svg/MoonIco';
import AccountNav from '@/components/AccountNav';
import BookingDates from '@/components/BookingDates';
import PlaceImg from '@/components/PlaceImg';
import axios from 'axios';
import { differenceInCalendarDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingsPage = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		axios
			.get('/all-bookings-user')
			.then((res) => {
				setBookings(res.data);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	return (
		<div>
			<AccountNav />
			<div>
				{bookings?.length > 0 &&
					bookings.map((booking) => (
						<Link
							className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden"
							key={booking._id}
							to={`/account/bookings/${booking._id}`}>
							<div className="w-48">
								<PlaceImg place={booking.place} />
							</div>
							<div className="py-3 pr-3 grow">
								<h2 className="text-xl">{booking.place.title}</h2>

								<div className="text-lg">
									<BookingDates booking={booking} className="mb-2 mt-4 text-gray-500" />
									<div className="flex gap-1">
										<CreditIco />
										<span className="text-lg">
											<b>Total price: </b>${booking.price}
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};
export default BookingsPage;
