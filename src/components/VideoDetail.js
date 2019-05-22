import React from 'react';
import '../css/VideoItem.css';


const VideoDetail = ({video}) => {

if (!video) {
  return (
        <div>
        <div className="ui embed">
          <iframe title='Video Player' src="" className="ui"/>
        </div>
          <div className="ui segment">
            <div className="ui header"> Title comes here</div>
            <p className="description"> Description too</p>
          </div>
        </div>
        );
}

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
        <div>
        <div className="ui embed">
          <iframe title='Video Player' src={videoSrc} className="ui"/>
        </div>
          <div className="ui segment">
            <div className="ui header"> {video.snippet.title}</div>
            <p className="description"> {video.snippet.description}</p>
          </div>
        </div>
        );
};

export default VideoDetail;
