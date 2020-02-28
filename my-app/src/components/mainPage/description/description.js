import React, { Fragment } from "react";

import "./description.css";

import mainPageData from '../../../assets/mainPageContent';

function Description({ lang }) {
  return (
    <Fragment>
      <section className="container">
        <div>
            <h1>{mainPageData[lang].title}</h1>
        </div>
        <div>
            <p>{mainPageData[lang].content}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Description;