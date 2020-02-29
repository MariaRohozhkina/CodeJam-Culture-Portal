import React from 'react';
import './TeamPage.css';
import { teamInfo } from './teamInfo';
import { TRANSLATE } from "../../constants/translate";

export default function TeamPage({ lang }) {
  return (
    <div className="team-page">
      <h2 className="team-header text-center">
       {TRANSLATE[lang].teamPageContent}
      </h2>
      <hr />
      <div className="container">
        <div className="card-group">
          {teamInfo.map((el, i) => (
            <div
              className="col-sm-9 col-md-4 col-10"
              key={i}
              style={{ marginBottom: '30px' }}
            >
              <div className="card team-card text-center">
                <div>
                  <img
                    src={el[0].avatar}
                    className="card-img-top team-avatar"
                    alt="avatar"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title team-card-title">{el[0].name}</h4>
                  <p className="card-text">{el[0].info}</p>
                  <a href={el[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-github-link"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
