// components/VideoPopup.jsx
import React, { useCallback } from 'react';
import ReactPlayer from 'react-player/youtube';

import '@/assets/scss/videopopup.style.scss';

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
	// Usamos useCallback para memorizar la función hidePopup
	const hidePopup = useCallback(() => {
		setShow(false);
		setVideoId(null);
	}, [setShow, setVideoId]);

	return (
		<div className={`videoPopup ${show ? 'visible' : ''}`}>
			<div className="opacityLayer" onClick={hidePopup}></div>
			<div className="videoPlayer">
				<span className="closeBtn" onClick={hidePopup}>
					Close
				</span>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${videoId}`}
					controls
					width="100%"
					height="100%"
					// playing={true}
				/>
			</div>
		</div>
	);
};

export default VideoPopup;
