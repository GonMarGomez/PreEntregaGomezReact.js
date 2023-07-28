import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import FooterElement from './components/Footer/footer.jsx';
import CarouselNovedades from './components/CarouselsNovedades/CarouselsNovedades.jsx'
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter> 
    <NavBar className ='navColor'></NavBar>
    <Routes>
      <Route exact path='/'element={ <section><ItemListContainer titulo='BIENVENIDOS A GAMING PATH'/><CarouselNovedades/></section> }/>
      <Route exact path='/category/:id'element={<ItemListContainer titulo='BIENVENIDO A LA CATEGORIA:'/>}/>
      <Route exact path='/item/:id'element={<ItemDetailContainer/>}/>
    </Routes>
    <FooterElement/>    
    </BrowserRouter>
    </>
  );
}

export default App;
