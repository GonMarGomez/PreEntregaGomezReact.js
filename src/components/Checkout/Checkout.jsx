import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Button } from "react-bootstrap";
import "./checkout.css";

const Checkout = () => {
  const db = getFirestore();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart } = useCartContext();
  const { totalPrice } = useCartContext();
  const createOrder = async ({ name, phone, email }) => {
    const objOrder = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.cantidad,
      })),
      total: totalPrice,
    };
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, objOrder.buyer).then(({ id }) => setOrderId(id)).finally(setLoading(false))
  };
  if (orderId) {
    return (
      <div className="ordenDeCompraBox">
        <h1 className="ordenDeCompraText">Orden de compra es: {orderId}</h1>
        <Button as={Link} to={'/'}>Ir al Inicio</Button>
      </div>
    );
  }
  return (
    <div className="checkoutform">
      <h1 className="checkoutTitle">Checkout</h1>
      <CheckoutForm onConfirm={createOrder}></CheckoutForm>
   
    </div>
  );
};
export default Checkout;
