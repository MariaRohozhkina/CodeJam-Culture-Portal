import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PhotographerCard.css';
import {
  Link,
} from "react-router-dom";

const PhotographerCard = ( props ) => {
  const {
    id,
    name,
    shortDescription,
    photo,
    years,
    buttonContent,
  } = props;

  return ( 
    <Card className="card-photographer">
      <div className="photo">
        <img className="card-photographer__photo" src={photo} alt="photographer" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text_italic">{years}</Card.Text>
        <Card.Text>{shortDescription}</Card.Text>
        <Link to={`/photographer/${id}`}><Button  className="button">{buttonContent}</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default PhotographerCard;