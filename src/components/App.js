import React from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'
import Particles from 'react-particles-js';

const particlesOptions = {
	    "particles": {
	        "number": {
	            "value": 200,
	            density: { 
                      enable: true,
                      value_area: 2000                      
                    }
	        },
	        "size": {
	            "value": 2
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}

class App extends React.Component {
state = {videos: [], selectedVideo: null };

componentDidMount () {
	this.onTermSubmit('best places world');
}


onTermSubmit = async term => {
	const response = await youtube.get('/search', {
		params: {
			q: term
		}
	});

	this.setState({
	 	videos: response.data.items,
	 	selectedVideo: response.data.items[0]
	});

};

onVideoSelect = (video) => {
	this.setState ({selectedVideo : video});
	console.log(this.selectedVideo);
};


  render () {
    return (
    	<div>
    	<Particles className='particles' params={particlesOptions} />
    	<div className="ui container">
    	 
    	   	<SearchBar onFormSubmit={this.onTermSubmit} />
    	   	<div className="ui grid">
    	   		<div className="ui row">
    	   			<div className="eleven wide column">
		    	   		<VideoDetail video={this.state.selectedVideo} />
		    	   	</div>
		    	   	<div className="five wide column">
			    	   	<VideoList 
			    	   		onVideoSelect={this.onVideoSelect} 
			    	   		videos={this.state.videos}
			    	   	/>
			    	</div>
		    	</div>
		   	</div>
    	</div>
    	</div>
    	);
} 
}
export default App;
