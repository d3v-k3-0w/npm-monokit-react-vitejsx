import { CalendarIco } from '@/assets/svg/CalendarIco';
import MoonIco from '@/assets/svg/MoonIco';
import { differenceInCalendarDays, format } from 'date-fns';

const BookingDates = ({ booking, className }) => {
	return (
		<div className={`flex gap-1 ${className}`}>
			<MoonIco />
			{differenceInCalendarDays(new Date(booking.checkIn), new Date(booking.checkOut))}
			&nbsp;nights:
			<div className="flex gap-1 items-center ml-2">
				<CalendarIco />
				{format(new Date(booking.checkIn), 'yyyy-MM-dd')}
			</div>
			&rarr;
			<div className="flex gap-1 items-center">
				<CalendarIco />
				{format(new Date(booking.checkOut), 'yyyy-MM-dd')}
			</div>
		</div>
	);
};
export default BookingDates;
