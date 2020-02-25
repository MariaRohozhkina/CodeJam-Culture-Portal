import React from 'react';
import photographerStyle from './Photographer.module.css';
import photographerData from '../../assets/photographersData';
import {
  // Link,
  useParams,
  // useLocation,
} from "react-router-dom";

function Photographer(props) {
  const { id } = useParams();
  const lang = props.lang;
  // return props.id;
  return (
    <div className = {photographerStyle.wrapper}>
      <div className = {photographerStyle.main}>
        <img src = {photographerData[id].photo} alt={photographerData[id][lang].name}/>
        <div className = {photographerStyle.info}>
          <h2>{photographerData[id][lang].name}</h2>
          <p><span className = {photographerStyle.years}>{photographerData[id][lang].years}</span></p>
          <p>{photographerData[id][lang].summary}</p>
          <p>{photographerData[id][lang].info}</p>
        </div>
      </div>
    </div>
  )
}

export default Photographer;
