import React from 'react';
import './Photographer.css';
import photographersData from '../../assets/photographersData';
import Timeline from '../Timeline/Timeline';

function Photographer(props) {
  const id = props.id;
  return (
    <div>
      <div className = 'wrapper'>
        <div className = 'main'>
          <img src = {photographersData[id].photo} alt={photographersData[id].RU.name}/>
          <div className = 'info'>
            <h2>{photographersData[id].RU.name}</h2>
            <p><span className = 'years'>{photographersData[id].RU.years}</span></p>
            <p>{photographersData[id].RU.summary}</p>
            <p>{photographersData[id].RU.info}</p>
          </div>
        </div>
      </div>
      <Timeline id={id}/>
    </div>
  )
}

export default Photographer;
