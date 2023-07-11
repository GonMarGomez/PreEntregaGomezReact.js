import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import CarouselNovedades from './components/CarouselsNovedades/CarouselsNovedades.js'
import NavBar from "./components/NavBar/NavBar";
import FooterElement from './components/Footer/footer.js';
import './App.css'
function App() {
  return (
    <>
    <div className='novedadesInicio'> 
    <NavBar className ='navColor'></NavBar>
    <ItemListContainer titulo='BIENVENIDOS A GAMING PATH'/>
    <CarouselNovedades></CarouselNovedades>
    <FooterElement></FooterElement>
    </div>
    </>
  );
}

export default App;
