import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AuthorCard.css';


function AuthorCard({name, shortDescription, photo, years}) {  
  return ( 
    <Card className="card-author">
      <div className="photo">
        <img className="card-author__photo" src={photo} alt="author" />
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

export default AuthorCard;