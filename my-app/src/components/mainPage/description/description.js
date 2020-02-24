import React, { Fragment } from "react";

import "./description.css";

import mainPageData from './mainPageContent';

const Description = () => {
  return (
    <Fragment>
      <section className="container">
        <div>
            <h1>{mainPageData[0].dataRU}</h1>
        </div>
        <div>
            <p>{mainPageData[1].dataRU}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Description;