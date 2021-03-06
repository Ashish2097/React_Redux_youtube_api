// Youtube API key : AIzaSyB55t6oVZ281Kjk9IBGVyeEcUgfEcD3Qes

import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB55t6oVZ281Kjk9IBGVyeEcUgfEcD3Qes';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos : [],
			selectedVideo : null
		};

		this.videoSearch('Youtube Home');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term}, (videos)=> {
			this.setState({
			 	videos,
				selectedVideo : videos[0]
			});
		});
	}

	render () {
		const videoSearch = _.debounce(term => this.videoSearch(term), 1000);
		return (
			<div>
				<Searchbar onSearchTermChange = {term => this.videoSearch(term)} />
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList
					onVideoSelect = {(selectedVideo) => this.setState({selectedVideo}) }
					videos = {this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));