import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Button } from "react-bootstrap";
import "./checkout.css";

const Checkout = () => {
  const db = getFirestore();
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice } = useCartContext();

  const createOrder = async ({ name, phone, email }) => {
    if (!name || !phone || !email || cart.length === 0 || !totalPrice()) {
      console.error("datos incompletos.");
    }

    const orderData = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
      })),
      total: totalPrice(),
    };
    console.log('orderData:',orderData);
    try {
      const orderCollection = collection(db, "orders");
      const docRef = await addDoc(orderCollection, orderData);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Error creando orden:", error);
    }
  };

  return (
    <div className="checkoutform">
      {orderId ? (
        <div className="ordenDeCompraBox">
          <h1 className="ordenDeCompraText">Orden de compra es: {orderId}</h1>
          <Button as={Link} to={'/'}>Ir al Inicio</Button>
        </div>
      ) : (
        <div>
          <h1 className="checkoutTitle">Checkout</h1>
          <CheckoutForm onConfirm={createOrder} />
        </div>
      )}
    </div>
  );
};

export default Checkout;