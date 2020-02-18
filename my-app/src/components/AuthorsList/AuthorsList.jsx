import React from 'react';
import  AuthorCard from '../AuthorCard/AuthorCard';
import { CONTENT_ARRAY } from '../../constants/Content.js';
import './AuthorsList.css';

function AuthorsList() {
  return (
    <section className="content">
      <div className="wrapper">
        {CONTENT_ARRAY.map((card) => (
        <AuthorCard 
          name={card.name}
          shortDescription={card.shortDescription}
        />
        ))}
      </div>
    </section>
  );
}

export default AuthorsList;