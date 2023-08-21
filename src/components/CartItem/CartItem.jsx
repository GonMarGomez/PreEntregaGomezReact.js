import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ShoppingCart from '../shoppingCart/Cart';
import { Button } from 'react-bootstrap';
import './cartItem.css'
export const CartItem = () => {
    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0){
        return( 
        <>
        <div className='cartsBoxClean'>
            <div className='cartsBoxBackground'>  
            <h1 className='titleCarts'>No hay elementos en el carrito</h1>
            <Link className='linkCart' to ='/'>Ir a home</Link>
            </div>
        </div>
        </>
        );
    }

  return (
    <>
    <div className='cartsBox'>
    {
        cart.map(product => <ShoppingCart key ={product.id} product={product}/>)
    }
    </div>
    <div className='comprarBox'> 
    <p className='textPrecio'>Precio Total: ${totalPrice()}</p>
    <Button as={Link} to={'/checkout'}>Comprar</Button>
    </div>
    </>
  )
}
