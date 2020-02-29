import React, { useState } from 'react';
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import photographersData from '../../constants/photographersData';
import { TRANSLATE } from '../../constants/translate';
import './PhotographersList.css';

function PhotographersList({ lang }) {
  const [term, setTerm] = useState('');

  const handleEnterKey = (e) => {
    const inputValue = document.querySelector('.search-input');
    if (e.key === 'Enter') {
      setTerm(inputValue.value);
    }
  };

  const handleClick = () => {
    const inputValue = document.querySelector('.search-input');
    setTerm(inputValue.value);
  };

  const searchByTerm = (items, searchTerm) => {
    if (searchTerm === '') {
      return items;
    }
    return items.filter((item) => {
      return (
        item[lang].name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item[lang].birthCity.toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
      );
    });
  };
  const btnTitle = () => {
    switch (lang) {
      case 'EN':
        return 'Search';
      case 'RU':
        return 'Поиск';
      default:
        return 'Пошук';
    }
  };
  const placeHolderTitle = () => {
    switch (lang) {
      case 'EN':
        return 'Search for photographer';
      case 'RU':
        return 'Поиск фотографа';
      default:
        return 'Пошук фатографа';
    }
  };
  const visibleData = searchByTerm(photographersData, term);

  return (
    <section className="content">
      <div className="container mt-5">
        <div className="search-box input-group mb-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder={placeHolderTitle()}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onKeyDown={handleEnterKey}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={handleClick}
            >
              {btnTitle()}
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
  );
}

export default PhotographersList;
