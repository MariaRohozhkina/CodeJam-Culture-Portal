import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AuthorCard.css';
import Photo from './author-without-photo.jpg';


function AuthorCard({name, shortDescription}) {  
  return (
    <Card className="card-author">
      <img className="card-author__photo" src={Photo} alt="author" />
      <Card.Body>
        <Card.Title className="card__name">{name}</Card.Title>
        <Card.Text className="card__text">{shortDescription}</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  )
}

export default AuthorCard;