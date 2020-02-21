import React, { Component, Fragment } from "react";

import "./main.css";

import Description from "./description";
import photographersData from '../../assets/photographersData';
import photo from '../../assets/phot.jpeg';

class MainPage extends Component {

  chooseDate() {
    const date = new Date();
    const numOfTheAuthor = date.getDay();
    return numOfTheAuthor;
  }

    render() {
      const nameOfRubric = 'Автор дня'; 
      const nameOfAuthor = photographersData[2].dataRU.name;
      const summary = photographersData[2].dataRU.summary;
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
              <img className="author-photo-container" src={photo}></img>
            </div>
            <div>
              <h2>{nameOfRubric}</h2>
              <h5>{nameOfAuthor}</h5> 
              <p>{summary}</p>
              <p className='border'>
                <a className="btn btn-default" role="button">{learnMoreBtn}</a>
              </p>
            </div>
          </div>
        </Fragment>
      );
    }
  }

  // Заменить в Авторе дня индекс на результат работы метода choose date 
  
  export default MainPage;