import React from 'react';
import photographerStyle from './Photographer.module.css';
import photographerData from '../../assets/photographersData';

function Photographer(props) {
  const id = props.id;
  return (
    <div className = {photographerStyle.wrapper}>
      <div className = {photographerStyle.main}>
        <img src = {photographerData[id].photo} alt={photographerData[id].dataRU.name}/>
        <div className = {photographerStyle.info}>
          <h2>{photographerData[id].dataRU.name}</h2>
          <p><span className = {photographerStyle.years}>{photographerData[id].dataRU.years}</span></p>
          <p>{photographerData[id].dataRU.summary}</p>
          <p>{photographerData[id].dataRU.info}</p>
        </div>
      </div>
    </div>
  )
}

export default Photographer;
