import React from "react";
import './cart.css'
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "bootstrap/dist/css/bootstrap.min.css";
const ShoppingCart = ({product})=>{
const {removeProduct} = useCartContext();
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cantidad:{product.cantidad}</ListGroup.Item>
          <ListGroup.Item>Precio: {product.price}</ListGroup.Item>
          <ListGroup.Item>Subtotal : ${product.cantidad * product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button onClick={()=> removeProduct(product.id)} variant="primary">Eliminar</Button>
        </Card.Body>
      </Card>
    )
}
export default ShoppingCart;