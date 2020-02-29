import React, { useState } from 'react';
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import photographersData from '../../constants/photographersData';
import { TRANSLATE } from '../../constants/translate';
import './PhotographersList.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

function PhotographersList({ lang }) {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    const inputValue = document.querySelector('.search-input');
    setTerm(inputValue.value);
  };

  const searchByTerm = (items, searchTerm) => {
    if (searchTerm === '') {
      return items;
    }
    console.log(lang);
    return items.filter((item) => {
      return (
        item[lang].name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item[lang].birthCity.toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
      );
    });
  };

  const visibleData = searchByTerm(photographersData, term, lang);

  return (
    <ReactCSSTransitionGroup
      transitionName="animation"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
    <section className="content">
      <div className="container">
        <div className="search-box input-group mb-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search for photographer"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={handleSearch}
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {visibleData.map((card) => (
          <PhotographerCard
            key={card.id}
            id={card.id}
            lang={lang}
            photo={card.photo}
            years={card[lang].years}
            name={card[lang].name}
            shortDescription={card[lang].summary}
            buttonContent={TRANSLATE[lang].buttonContent}
          />
        ))}
      </div>
    </section>
    </ReactCSSTransitionGroup>
  );
}

export default PhotographersList;
