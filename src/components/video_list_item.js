import React from 'react';

const VideoListItem = function ({video, onVideoSelect}) {
	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;
	const heading = video.snippet.title;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageUrl} className="media-object" />

					<div className="media-body">
						<div className="media-heading">
							{heading}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;