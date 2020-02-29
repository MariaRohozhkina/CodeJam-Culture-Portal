import React from 'react';
import './Photographer.css';
import { Link, useParams } from 'react-router-dom';

import photographersData from '../../constants/photographersData';
import Timeline from '../Timeline';
import { TRANSLATE } from '../../constants/translate';
import Map from '../Map';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import PhotoGallery from '../PhotoGallery';
import ModalV from '../ModalV';

const Photographer = (props) => {
  const { id } = useParams();
  const { lang } = props;

  return (
    <ReactCSSTransitionGroup
      transitionName="animation"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className = 'main-wrapper'>
        <div className = 'main'>
          <img src = {photographersData[id].photo} alt={photographersData[id][lang].name}/>
          <div className = 'info'>
            <h2>{photographersData[id][lang].name}
              {photographersData[id].video !== '' ?
                (
                  <span className='video-wrapper'>
                    <ModalV src={photographersData[id].video}/>
                  </span>
                ) : null
              }

            </h2>
            <p>
              <span className="years">{photographersData[id][lang].years}</span>
            </p>
            <p>{photographersData[id][lang].summary}.</p>
            <p>{photographersData[id][lang].info}</p>
          </div>
        </div>
      </div>
      <Timeline id={id} lang={lang} />
      <PhotoGallery id={id} />
      <div className="works">
        <h2 className="worksH2">
          {photographersData[id][lang].name}
          {TRANSLATE[lang].photographerWorks}
        </h2>
        {photographersData[id][lang].works.map((work) => (
          <p key={work}>{work}</p>
        ))}
      </div>
      <Map coords={photographersData[id].places} lang={lang} />
      <p className="back">
        <Link to="/photographers" id="sg-address" className="sg-address">
          {TRANSLATE[lang].backToList}
        </Link>
      </p>
    </ReactCSSTransitionGroup>
  );
}

export default Photographer;
