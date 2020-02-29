/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import './Map.css';

function Map({ coords }) {
  return (
    // Important! Always set the container height explicitly
    <>
      <h2 className="text-center mt-5">
        Place of author&apos;s major activity
      </h2>
      <div
        className="container px-3 py-4 map-container"
        style={{ height: '400px', width: '400px' }}
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
  coords: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Map;
