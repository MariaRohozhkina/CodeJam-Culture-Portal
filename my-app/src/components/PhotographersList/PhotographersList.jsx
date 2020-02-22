import React from 'react';
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import photographersData from '../../assets/photographersData';
import { TRANSLATE } from '../../assets/translate';
import './PhotographersList.css';

function PhotographersList() {  
    return (    
      <section className="content">
        <div className="wrapper">
          {photographersData.map((card) => (
          <PhotographerCard 
            key = {card.id}
            photo= {card.photo}
            years={card.dataRU.years}
            name={card.dataRU.name}
            shortDescription={card.dataRU.summary}
            buttonContent={TRANSLATE.dataRU.buttonContent}
          />
          ))}
        </div>
      </section>
  );
}

export default PhotographersList;