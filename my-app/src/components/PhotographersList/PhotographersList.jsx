import React from 'react';
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import photographersData from '../../constants/photographersData';
import { TRANSLATE } from '../../constants/translate';
import './PhotographersList.css';



function PhotographersList({ lang }) {  
  return ( 
    <section className="content">
      <div className="wrapper">
        {photographersData.map((card) => (
        <PhotographerCard 
          key = {card.id}
          id = {card.id}
          lang={lang}
          photo= {card.photo}
          years={card[lang].years}
          name={card[lang].name}
          shortDescription={card[lang].summary}
          buttonContent={TRANSLATE[lang].buttonContent}
        />
        ))}    
      
      </div>
    </section>    
  );
}

export default PhotographersList;