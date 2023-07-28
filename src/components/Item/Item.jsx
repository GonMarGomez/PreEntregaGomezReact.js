import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import './Item.css'
const Item = ({prod}) => {
  return (
    <CardGroup className='cardDiv'>
    <Card className='card'>
      <Card.Img variant="top" className='prodImg' src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Card.Text className='precioCard'>
          {prod.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button as={Link} to={`item/${prod.id}`} variant='light'>Ver más...</Button>
      </Card.Footer>
    </Card>
    </CardGroup>
  )
}

export default Item