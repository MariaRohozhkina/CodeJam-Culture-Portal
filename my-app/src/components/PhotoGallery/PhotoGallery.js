// @flow
// @jsx glam
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import photographersData from '../../constants/photographersData';
import './PhotoGallery.css';
import glam from 'glam';

class PhotoGallery extends Component {
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false,
  };

  toggleLightbox = (selectedIndex) => {
    this.setState((state) => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };

  render() {
    const { isLoading, id } = this.props;
    const { selectedIndex, lightboxIsOpen } = this.state;
    const images = [];
    photographersData[id].photogallery.map((photo) =>
      images.push({ src: photo }),
    );

    return (
      <Fragment>
        {!isLoading ? (
          <div className="gallery">
            {images.map(({ src }, j) => (
              <div
                className="image"
                onClick={() => this.toggleLightbox(j)}
                key={src}
              >
                <img
                  alt={photographersData[id].name}
                  src={src}
                  css={{
                    cursor: 'pointer',
                    position: 'absolute',
                    maxWidth: '100%',
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}

        <ModalGateway>
          {lightboxIsOpen && !isLoading ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel
                currentIndex={selectedIndex}
                frameProps={{ autoSize: 'height' }}
                views={images}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    );
  }
}

export default PhotoGallery;
