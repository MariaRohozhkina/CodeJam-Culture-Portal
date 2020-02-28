import React from 'react';
import { PlyrComponent } from 'plyr-react';
import './VideoPlayer.css';

export default function VideoPlayer(props) {
  const videoSrc = props.src;

  const sources = {
    type: 'video',
    sources: [
      {
        src: videoSrc,
        type: 'video/mp4',
        size: 720,
      },
    ],
  }
  
  if (videoSrc.indexOf('youtube') !== -1) {
    sources.sources[0].provider = 'youtube';
  }

  return (
    <div className='videoPlayer'>
      <PlyrComponent sources={sources}/>
    </div>
  );
}
