import React from 'react';
import './TeamPage.scss';
import { teamInfo } from './teamInfo';

export default function TeamPage() {
  return (
    <div className="team-page">
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
                  <h5 className="card-title">{el[0].name}</h5>
                  <p className="card-text">{el[0].info}</p>
                  <a
                    href={el[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
