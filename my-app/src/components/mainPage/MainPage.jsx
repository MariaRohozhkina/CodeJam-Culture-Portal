import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import React, { Component } from "react";
import './MainPage.css';

import { TRANSLATE } from "../../constants/translate";
import PhotographerCard from '../PhotographerCard';
import PhotoGallery from '../PhotoGallery';
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
    const { lang } = this.props;
    const nameOfAuthor = photographersData[this.chooseDate()][lang].name;
    const summary = photographersData[this.chooseDate()][lang].summary;
    const photo = photographersData[this.chooseDate()].photo;
    const id = photographersData[this.chooseDate()].id;
    const years = photographersData[this.chooseDate()][lang].years;

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
          <div id='info-about-author'>
            <h2>{TRANSLATE[lang].authorOfTheDay}</h2>
            <PhotographerCard
              key={id}
              id={id}
              lang={lang}
              photo={photo}
              years={years}
              name={nameOfAuthor}
              shortDescription={summary}
              buttonContent={TRANSLATE[lang].buttonContent}
            />
          </div>
        </div>
       <PhotoGallery id={id}/>
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainPage;
