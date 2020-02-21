import React from 'react';
import  AuthorCard from '../PhotographerCard/PhotographerCard';
import photographersData from '../../assets/photographersData';
import './PhotographersList.css';

function PhotographersList() {
  return (    
    <section className="content">
      <div className="wrapper">
        {photographersData.map((card) => (
        <AuthorCard 
          photo= {card.photo}
          years={card.dataRU.years}
          name={card.dataRU.name}
          shortDescription={card.dataRU.summary}
        />
        ))}
      </div>
    </section>
  );
}

export default PhotographersList;