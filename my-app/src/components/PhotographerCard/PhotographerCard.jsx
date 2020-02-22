import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PhotographerCard.css';


function PhotographerCard({name, shortDescription, photo, years}) {  
  return ( 
    <Card className="card-photographer">
      <div className="photo">
        <img className="card-photographer__photo" src={photo} alt="photographer" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text_italic">{years}</Card.Text>
        <Card.Text>{shortDescription}</Card.Text>
        <Button  variant="primary" >Learn more</Button>
      </Card.Body>
    </Card>
  )
}

export default PhotographerCard;