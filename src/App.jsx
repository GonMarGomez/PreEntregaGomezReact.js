import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import { CartItem } from './components/CartItem/CartItem.jsx';
import FooterElement from './components/Footer/footer.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import CarouselNovedades from './components/CarouselsNovedades/CarouselsNovedades.jsx'
import CartProvider from './context/CartContext.jsx';
import './App.css'
import React from 'react';


function App() {
  return (
    <>

    <BrowserRouter> 
    <CartProvider> 
    <NavBar className ='navColor'></NavBar>
    <Routes>
      <Route path='/cart' element={<CartItem></CartItem>}></Route>
      <Route path='/'element={ <section><ItemListContainer titulo='BIENVENIDOS A GAMING PATH'/><CarouselNovedades/></section> }/>
      <Route path='/category/:id'element={<ItemListContainer titulo='BIENVENIDO A LA CATEGORIA:'/>}/>
      <Route path='/item/:id'element={<ItemDetailContainer/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
    </Routes>
    </CartProvider>
    <FooterElement/>    
    </BrowserRouter>
 
    </>
  );
}

export default App;
