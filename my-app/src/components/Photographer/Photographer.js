import React from 'react';
import './Photographer.css';
import photographersData from '../../assets/photographersData';
import Timeline from '../Timeline/Timeline';
import { TRANSLATE } from '../../assets/translate';
import {
  Link,
  useParams,
} from "react-router-dom";

function Photographer(props) {
  const { id } = useParams();
  const lang = props.lang;
  
  return (
    <div>
      <div className = 'wrapper'>
        <div className = 'main'>
          <img src = {photographersData[id].photo} alt={photographersData[id][lang].name}/>
          <div className = 'info'>
            <h2>{photographersData[id][lang].name}</h2>
            <p><span className = 'years'>{photographersData[id][lang].years}</span></p>
            <p>{photographersData[id][lang].summary}</p>
            <p>{photographersData[id][lang].info}</p>
          </div>
        </div>
      </div>
      <Timeline id={id}/>
      <p><Link to="/photographers">{TRANSLATE[lang].backToList}</Link></p>
    </div>
  )
}

export default Photographer;
