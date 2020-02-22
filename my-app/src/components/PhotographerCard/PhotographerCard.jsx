import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PhotographerCard.css';


function PhotographerCard({
  name,
  shortDescription,
  photo,
  years,
  buttonContent,
}) {  
  return ( 
    <Card className="card-photographer">
      <div className="photo">
        <img className="card-photographer__photo" src={photo} alt="photographer" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text_italic">{years}</Card.Text>
        <Card.Text>{shortDescription}</Card.Text>
        <Button  className="button">{buttonContent}</Button>
      </Card.Body>
    </Card>
  )
}

export default PhotographerCard;