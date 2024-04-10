import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useFetch } from '../../../hooks/useFetch';
import { PlayIcon } from '../PlayIcon.jsx';
import { toHoursAndMinutes } from '../../../utils/toHoursAndMinutes';
import ContentWrapper from '@/components/layouts/contentwapper/ContentWrapper';
import Img from '@/components/ui/lazyloader/Img';
import CircleRating from '@/components/ui/circlerating/CircleRating';
import GenRes from '@/components/ui/genres/GenRes';
import VideoPopup from '@/components/ui/videopopup/VideoPopup';
import BannerSkeletonItem from '@/components/ui/skeleton/BannerSkeletonItem';

import PosterFallback from '@/assets/img/no-poster.png';
import '../../../assets/scss/banner.style.scss';

const InfoItem = ({ label, children }) => (
	<div className="infoItem">
		<span className="text bold">{label}</span>
		<span className="text">{children}</span>
	</div>
);

const InfoList = ({ label, list }) => (
	<div className="info">
		<span className="text bold">
			{label}: {''}
		</span>
		<span className="text">
			{list.map((item, i) => (
				<span key={i}>
					{item.name}
					{list.length - 1 !== i && ', '}
				</span>
			))}
		</span>
	</div>
);

const Banner = ({ video, crew }) => {
	const [show, setShow] = useState(false);
	const [videoId, setVideoId] = useState(null);

	const { mediaType, id } = useParams();

	const { data, loading } = useFetch(`/${mediaType}/${id}`);

	const { url } = useSelector((state) => state.home);

	const _genres = data?.genres?.map((g) => g.id);

	const director = crew?.filter((f) => f.job === 'Director');

	const writer = crew?.filter(
		(f) => f.job === 'Screenplay' || f.job === 'Story' || f.job === 'Writer'
	);

	return (
		<div className="detailsBanner">
			{!loading ? (
				<>
					{!!data && (
						<>
							<div className="backdropImg">
								<Img src={`${url.backdrop}${data.backdrop_path}`} />
							</div>

							<div className="opacityLayer"></div>

							<ContentWrapper>
								<div className="content">
									<div className="left">
										{data.poster_path ? (
											<Img src={`${url.backdrop}${data.poster_path}`} className="posterImg" />
										) : (
											<Img src={PosterFallback} className="posterImg" />
										)}
									</div>
									<div className="right">
										<div className="title">{`${data.name || data.title} (${dayjs(
											data.release_date
										).format('YYYY')}) `}</div>

										<div className="subtitle">{data.tagline}</div>

										<GenRes data={_genres} />

										<div className="row">
											<CircleRating rating={data.vote_average.toFixed(1)} />
											<div
												className="playbtn"
												onClick={() => {
													setShow(true);
													setVideoId(video.key);
												}}>
												<PlayIcon />
												<span className="text">ver Trailer</span>
											</div>
										</div>

										<div className="overview">
											<div className="heading">OverView</div>
											<div className="description">{data.overview}</div>
										</div>

										<div className="info">
											{data.status && <InfoItem label="Status:">{data.status}</InfoItem>}
											{data.release_date && (
												<InfoItem label="Release Date:">
													{dayjs(data.release_date).format('MMM D, YYYY')}
												</InfoItem>
											)}
											{data.runtime && (
												<InfoItem label="Runtime:">{toHoursAndMinutes(data.runtime)}</InfoItem>
											)}
										</div>

										{director?.length > 0 && <InfoList label="Director" list={director} />}
										{writer?.length > 0 && <InfoList label="Escritor" list={writer} />}
										{data?.created_by?.length > 0 && (
											<InfoList label="Creador" list={data.created_by} />
										)}
									</div>
								</div>
								<VideoPopup
									show={show}
									setShow={setShow}
									videoId={videoId}
									setVideoId={setVideoId}
								/>
							</ContentWrapper>
						</>
					)}
				</>
			) : (
				<div className="detailsBannerSkeleton">
					<ContentWrapper>
						<BannerSkeletonItem />
						<BannerSkeletonItem />
						<BannerSkeletonItem />
						<BannerSkeletonItem />
						<BannerSkeletonItem />
						<BannerSkeletonItem />
						<BannerSkeletonItem />
					</ContentWrapper>
				</div>
			)}
		</div>
	);
};

export default Banner;
