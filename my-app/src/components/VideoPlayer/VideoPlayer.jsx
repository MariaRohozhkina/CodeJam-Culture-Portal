import React from 'react';
import { PlyrComponent } from 'plyr-react';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
  const { src } = props;

  const sources = {
    type: 'video',
    sources: [
      {
        src: src,
        type: 'video/mp4',
        size: 720,
      },
    ],
  }
  
  if (src.indexOf('youtube') !== -1) {
    sources.sources[0].provider = 'youtube';
  }

  return (
    <div className='videoPlayer'>
      <PlyrComponent sources={sources}/>
    </div>
  );
}

export default VideoPlayer;
