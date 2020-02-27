import React, { Component, Fragment } from 'react';

import './main.css';

import Description from './description';
import photographersData from '../../assets/photographersData';

class MainPage extends Component {
  chooseDate() {
    const date = new Date();
    const numOfTheAuthor = date.getDay();
    return numOfTheAuthor;
  }

  render() {
    const nameOfRubric = 'Автор дня';
    const nameOfAuthor = photographersData[0].RU.name;
    const summary = photographersData[0].RU.summary;
    const photo = photographersData[0].photo;
    const learnMoreBtn = 'Узнать больше »';

    return (
      <Fragment>
        <div className="jumbotron">
          <div>
            <Description />
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <img
              className="author-photo-container"
              src={photo}
              alt="Photographer"
            ></img>
          </div>
          <div id="info-about-author">
            <h2>{nameOfRubric}</h2>
            <h5>{nameOfAuthor}</h5>
            <p>{summary}</p>
            <p className="border">
              <button className="btn btn-default">{learnMoreBtn}</button>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
