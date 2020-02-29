
import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import { TRANSLATE } from "../../constants/translate";
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import PhotoGallery from '../PhotoGallery/PhotoGallery';


import './main.css';


import Description from "./description";
import photographersData from '../../constants/photographersData';
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

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
    const years = photographersData[this.chooseDate()][lang].years;


    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default MainPage;
