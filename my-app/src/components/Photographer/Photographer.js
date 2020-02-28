import React from 'react';
import './Photographer.css';
import photographersData from '../../constants/photographersData';
import Timeline from '../Timeline/Timeline';
import { TRANSLATE } from '../../constants/translate';
import {
  Link,
  useParams,
} from "react-router-dom";
import PhotoGallery from '../PhotoGallery/PhotoGallery';

function Photographer(props) {
  const { id } = useParams();
  const lang = props.lang;
  
  return (
    <div>
      <div className = 'main-wrapper'>
        <div className = 'main'>
          <img className = "person-photo"src = {photographersData[id].photo} alt={photographersData[id][lang].name}/>
          <div className = 'info'>
            <h2>{photographersData[id][lang].name}</h2>
            <p><span className = 'years'>{photographersData[id][lang].years}</span></p>
            <p>{photographersData[id][lang].summary}.</p>
            <p>{photographersData[id][lang].info}</p>
          </div>
        </div>
      </div>
      <Timeline id={id} lang={lang}/>
      <PhotoGallery id={id}/>
      <div className='works'>
        <h2 className='worksH2'>{photographersData[id][lang].name}{TRANSLATE[lang].photographerWorks}</h2>
        {photographersData[id][lang].works.map((work) => <p>{work}</p>)}
      </div>
      <p className='back'><Link to="/photographers" id="sg-adress" className="sg-adress">{TRANSLATE[lang].backToList}</Link></p>
    </div>
  )
}

export default Photographer;
