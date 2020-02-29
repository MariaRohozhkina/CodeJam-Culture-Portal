import React from 'react';
import Popup from 'reactjs-popup';

import VideoPlayer from '../VideoPlayer';
import './ModalV.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const ModalV = (props) => {
  return (
    <Popup
      trigger={<span><FontAwesomeIcon icon={faPlayCircle} className='awesomeV'/></span>}
      modal
      closeOnDocumentClick
    >
      <span>
        <VideoPlayer src={props.src}/>
      </span>
    </Popup>
  );
}

export default ModalV;