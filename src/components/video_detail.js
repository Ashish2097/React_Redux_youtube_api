import React from 'react';

const VideoDetail = ({video}) => {
	if(!video) {
		return (<div>Loading....</div>)
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const title = video.snippet.title;
	const description = video.snippet.description;


	return (
		<div className="video-detail col-md-8">
	{/*		<div className="embed-responsive-item embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
	*/}
			<div className="video-container">
			  <iframe width="640" height="360" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div className="details">
				<div>{title}</div>
				<div>{description}</div>
			</div>
		</div>
	);
}

export default VideoDetail;


