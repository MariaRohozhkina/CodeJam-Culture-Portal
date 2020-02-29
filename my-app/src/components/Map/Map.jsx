/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Map = ({ coords, lang }) => {
  const title = () => {
    switch (lang) {
      case 'EN':
        return "Place of author's major activity";
      case 'RU':
        return 'Место основной деятельности автора';
      default:
        return 'Месца асноўнай дзейнасці аўтара';
    }
  };
  return (
    <>
      <h2 className="text-center mt-5">{title()}</h2>
      <div
        className="container px-3 py-4 map-container"
        style={{
          max-width: '1200px',
          height: '400px',
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAtNZfH51zhkB5UL2QIV8z9ELKlxjgsIkU',
          }}
          defaultCenter={coords.center}
          defaultZoom={10}
        ></GoogleMapReact>
      </div>
    </>
  );
}

Map.propTypes = {
  lang: PropTypes.string.isRequired,
  coords: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Map;
