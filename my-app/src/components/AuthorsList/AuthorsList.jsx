import React from 'react';
import  AuthorCard from '../AuthorCard/AuthorCard';
import photographersData from '../../assets/photographersData';
import './AuthorsList.css';

function AuthorsList() {
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

export default AuthorsList;