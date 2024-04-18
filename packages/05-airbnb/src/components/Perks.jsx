import { ArrowIco } from '@/assets/svg/ArrowIco';
import { FingerIco } from '@/assets/svg/FingerIco';
import { RadioIco } from '@/assets/svg/RadioIco';
import TruckIco from '@/assets/svg/TruckIco';
import { TvIco } from '@/assets/svg/TvIco';
import { WifiIco } from '@/assets/svg/WifiIco';
const Perks = ({ selected, onChange }) => {
	const handlerCheckboxClick = (e) => {
		const { checked, name } = e.target;

		if (checked) {
			onChange([...selected, name]);
		} else {
			onChange([...selected.filter((selectedName) => selectedName !== name)]);
		}
	};

	return (
		<>
			<label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected?.includes('wifi')}
					name="wifi"
					onChange={handlerCheckboxClick}
				/>
				<WifiIco />
				<span>Wifi</span>
			</label>
			<label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected?.includes('parking')}
					name="parking"
					onChange={handlerCheckboxClick}
				/>
				<TruckIco />
				<span>Free parking spot</span>
			</label>
			<label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected?.includes('tv')}
					name="tv"
					onChange={handlerCheckboxClick}
				/>
				<TvIco />
				<span>Tv HD</span>
			</label>
			<label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected?.includes('radio')}
					name="radio"
					onChange={handlerCheckboxClick}
				/>
				<RadioIco />
				<span>Radio</span>
			</label>
			<label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected?.includes('pets')}
					name="pets"
					onChange={handlerCheckboxClick}
				/>
				<FingerIco />
				<span>Pets</span>
			</label>
			<label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected?.includes('entrance')}
					name="entrance"
					onChange={handlerCheckboxClick}
				/>
				<ArrowIco />
				<span>Entrance</span>
			</label>
		</>
	);
};
export default Perks;
