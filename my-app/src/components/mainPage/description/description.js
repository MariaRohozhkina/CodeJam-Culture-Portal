import React, { Fragment } from "react";
import "./description.css";
import mainPageData from '../../../constants/mainPageContent';

function Description({ lang }) {
  return (
    <Fragment>
      <section className="container">
        <div>
            <h1>{mainPageData[0][lang]}</h1>
        </div>
        <div>
            <p>{mainPageData[1][lang]}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Description;