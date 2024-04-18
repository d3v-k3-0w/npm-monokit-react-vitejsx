import { MarkIco } from '@/assets/svg/MarkIco';
import { PhotoIco } from '@/assets/svg/PhotoIco';
import { useState } from 'react';

const PlaceGallery = ({ place }) => {
	const [showAllPhotos, setShowAllPhotos] = useState(false);

	if (showAllPhotos) {
		return (
			<div className="absolute inset-0 text-white min-h-screen">
				<div className=" bg-black p-8 grid gap-4">
					<div>
						<h2 className="text-3xl mr-48">Photos of {place.title}</h2>
						<button
							className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl  shadow-black bg-white text-black"
							onClick={() => setShowAllPhotos(false)}>
							<MarkIco />
							Close
						</button>
					</div>

					{place?.photos?.length > 0 &&
						place.photos.map((photo) => (
							<div key={photo}>
								<img src={`http://localhost:3000/uploads/${photo}`} alt="photos" />
							</div>
						))}
				</div>
			</div>
		);
	}

	return (
		<div className="relative">
			<div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
				<div>
					{place.photos?.[0] && (
						<div className="">
							<img
								src={`http://localhost:3000/uploads/${place.photos[0]}`}
								className="aspect-square cursor-pointer object-cover"
								alt="img0"
								onClick={() => setShowAllPhotos(true)}
							/>
						</div>
					)}
				</div>
				<div className="grid">
					{place.photos?.[1] && (
						<img
							src={`http://localhost:3000/uploads/${place.photos[1]}`}
							className="aspect-square cursor-pointer object-cover"
							alt="img1"
							onClick={() => setShowAllPhotos(true)}
						/>
					)}
					<div className=" overflow-hidden">
						{place.photos?.[2] && (
							<img
								src={`http://localhost:3000/uploads/${place.photos[2]}`}
								className="aspect-square cursor-pointer object-cover relative top-2"
								alt="img2"
								onClick={() => setShowAllPhotos(true)}
							/>
						)}
					</div>
				</div>
			</div>
			<button
				className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl  shadow-md shadow-gray-500"
				onClick={() => setShowAllPhotos(true)}>
				<PhotoIco />
				Show more photos
			</button>
		</div>
	);
};
export default PlaceGallery;
