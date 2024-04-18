import { StarIco } from '@/assets/svg/StarIco';
import { StarSolidIco } from '@/assets/svg/StarSolidIco';
import { TrashIco } from '@/assets/svg/TrashIco';
import { UploadIco } from '@/assets/svg/UploadIco';
import axios from 'axios';
import { useState } from 'react';

const PhotoUploader = ({ addedPhotos, onChange }) => {
	const [photoLink, setPhotoLink] = useState('');

	const addPhotoByLink = async (e) => {
		e.preventDefault();
		const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });

		onChange((prev) => {
			return [...prev, filename];
		});
		setPhotoLink('');
	};

	const uploadPhoto = async (e) => {
		const files = e.target.files;

		// console.log(files);

		const data = new FormData();

		for (let i = 0; i < files.length; i++) {
			data.append('photos', files[i]);
		}

		try {
			const res = await axios.post('/upload', data, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});

			const { data: filenames } = res;

			// console.log(filenames);

			onChange((prev) => {
				return [...prev, ...filenames];
			});
		} catch (err) {
			console.Error('Error al cargar la foto', err);
		}
	};

	const removePhoto = (e, filename) => {
		e.preventDefault();

		onChange([...addedPhotos.filter((photo) => photo !== filename)]);
	};

	const selectAsMainPhoto = (e, filename) => {
		e.preventDefault();

		onChange([filename, ...addedPhotos.filter((photo) => photo !== filename)]);
	};

	return (
		<>
			<div className="flex gap-2">
				<input
					type="text"
					value={photoLink}
					placeholder={'Add using a link ...jpg'}
					onChange={(e) => setPhotoLink(e.target.value)}
				/>
				<button className="bg-gray-200 px-4 rounded-2xl" onClick={addPhotoByLink}>
					Add&nbsp;Photo
				</button>
			</div>

			<div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				{addedPhotos.length > 0 &&
					addedPhotos.map((link) => (
						<div className="h-32 flex relative" key={link}>
							<img
								src={`http://localhost:3000/uploads/${link}`}
								className="rounded-2xl w-full object-cover"
								alt="img"
							/>

							<button
								className="absolute cursor-pointer bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl p-1"
								onClick={(e) => removePhoto(e, link)}>
								<TrashIco />
							</button>
							<button
								className="absolute cursor-pointer bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl p-1"
								onClick={(e) => selectAsMainPhoto(e, link)}>
								{link === addedPhotos[0] && <StarSolidIco />}

								{link !== addedPhotos[0] && <StarIco />}
							</button>
						</div>
					))}
				<label className="h-32 border flex items-center cursor-pointer justify-center gap-1 bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
					<input type="file" multiple className="hidden" onChange={uploadPhoto} />
					<UploadIco />
					Upload
				</label>
			</div>
		</>
	);
};
export default PhotoUploader;
