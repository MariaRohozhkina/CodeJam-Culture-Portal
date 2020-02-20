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
              <h2>Автор дня</h2>
              <h5>{photographersData[2].dataRU.name}</h5> 
              <p>{photographersData[2].dataRU.summary}</p>
              <p className='border'>
                <a className="btn btn-default" role="button">Узнать больше »</a>
              </p>
            </div>
          </div>
        </Fragment>
      );
    }
  }

  // Заменить в Авторе дня индекс на результат работы метода choose date 
  
  export default MainPage;