import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./main.css";

import Description from "./description";
import photographersData from '../../assets/photographersData';

class MainPage extends Component {

  chooseDate() {
    const date = new Date();
    const numOfTheAuthor = date.getDay();
    return numOfTheAuthor;
  }

    render() {
      const nameOfRubric = 'Автор дня'; 
      const nameOfAuthor = photographersData[this.chooseDate()].RU.name;
      const summary = photographersData[this.chooseDate()].RU.summary;
      const photo = photographersData[this.chooseDate()].photo;
      const learnMoreBtn = 'Узнать больше »';
      const id = photographersData[this.chooseDate()].id;

      return (
        <Fragment>
          <div className="jumbotron">
            <div>
              <Description />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img className="author-photo-container" src={photo} alt="Photographer"></img>
            </div>
            <div id='info-about-author'>
              <h2>{nameOfRubric}</h2>
              <h5>{nameOfAuthor}</h5> 
              <p>{summary}</p>
              <Link to={`/photographer/${id}`}>
                <p className='border'>
                  <a className="btn btn-default" role="button">{learnMoreBtn}</a>
                </p>
              </Link>
            </div>
          </div>
        </Fragment>
      );
    }
  }
  
  export default MainPage;
