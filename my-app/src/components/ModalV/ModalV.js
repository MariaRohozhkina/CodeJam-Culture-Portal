import React from "react";
import Popup from "reactjs-popup";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import './ModalV.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function ModalV(props) {
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
  )
}