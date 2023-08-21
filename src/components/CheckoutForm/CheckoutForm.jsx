import React from 'react';
import { useState } from "react";
import { Button } from "react-bootstrap";
import './form.css'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleConfirm} className="form">
        <div className='boxLabel'> 
        <label className="label">
          Nombre:  
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="label">
          Telefono: 
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="label">
          E-mail :
          <input
            className="input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className="buttonDiv">
          <Button type="submit">Confirmar</Button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
