import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useCartContext } from '../../context/CartContext';
const ItemDetail = ({producto}) => {

const {addProduct} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} Productos`);
        addProduct(producto, cantidad)
     }
  return (
    <CardGroup className='cardDiv'>
    <Card className='card'>
      <Card.Img variant="top" className='prodImg' src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          {producto.description}
        </Card.Text>
        <Card.Text className='precioCard'>
          {producto.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </Card.Footer>
    </Card>
    </CardGroup>
  )
}   

export default ItemDetail