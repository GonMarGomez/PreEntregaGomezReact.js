import React, { useContext, useState } from 'react'
 const CartContext = React.createContext([])

export const useCartContext =() => useContext(CartContext)
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

 const addProduct =(item, Nuevacantidad) =>{
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push({...item, cantidad: Nuevacantidad,});
    setCart(newCart)
    console.log('carrito', cart);
 }
 const totalPrice = ()=> cart.reduce((prev, act)=> prev + act.cantidad * act.price, 0)
 const totalProducts = ()=> cart.reduce((acumulador, productoActual)=> acumulador + productoActual.cantidad, 0)

    const clearCart = () => setCart([])

    const isInCart = (id)=>{
        return cart.find( product=> product.id === id);
    }
    const removeProduct = (id)=>setCart(cart.filter(product=> product.id !== id));









    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider