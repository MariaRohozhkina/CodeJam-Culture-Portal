import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AuthorCard.css';


function AuthorCard({name, shortDescription}) {  
  return (
    <Card className="card-author">
      <Card.Img variant="top" src="#" />
      <Card.Body>
        <Card.Title className="card__name">{name}</Card.Title>
        <Card.Text className="card__text">{shortDescription}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default AuthorCard;