import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { TRANSLATE } from "../../constants/translate";


import './main.css';


import Description from "./description";
import photographersData from '../../constants/photographersData';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.chooseDate = this.chooseDate.bind(this);
  }

  chooseDate() {
    const date = new Date();
    const numOfTheAuthor = date.getDay();
    return numOfTheAuthor;
  }

  render() {

    const lang = this.props.lang;
    const nameOfAuthor = photographersData[this.chooseDate()][lang].name;
    const summary = photographersData[this.chooseDate()][lang].summary;
    const photo = photographersData[this.chooseDate()].photo;
    const id = photographersData[this.chooseDate()].id;


    return (
     <ReactCSSTransitionGroup
      transitionName="animation"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="jumbotron">
          <div>

            <Description lang = {lang}/>
          </div>
        </div>
        <div className="col-md-12 author-wrapper">
          <div>
            <img className="author-photo-container" src={photo} alt="Photographer"></img>
          </div>
          <div id='info-about-author'>
            <h2>{TRANSLATE[lang].authorOfTheDay}</h2>
            <h5>{nameOfAuthor}</h5> 
            <p>{summary}</p>
            <p className='button-wrapper'>
              <Link to={`/photographer/${id}`}>
                <button className="button btn btn-primary">{TRANSLATE[lang].buttonContent}</button>
              </Link>

            </p>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainPage;
