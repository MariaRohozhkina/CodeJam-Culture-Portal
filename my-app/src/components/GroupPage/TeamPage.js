import React from 'react';
import './TeamPage.css';
import { teamInfo } from './teamInfo';

export default function TeamPage() {
  return (
    <div className="team-page">
      <h2 className="team-header">
        Team members that made contributions to this project
      </h2>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        {teamInfo.map((el, i) => {
          return (
            <div className="col mb-3" key={i}>
              <div className="card team-card text-center">
                <img
                  src={el[0].avatar}
                  className="card-img-top team-avatar"
                  alt="avatar"
                />
                <div className="card-body">
                  <h4 className="card-title team-card-title">{el[0].name}</h4>
                  <p className="card-text">{el[0].info}</p>
                  <a
                    href={el[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-github-link"
                  ></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
