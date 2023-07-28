import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import imgCupHead from '../../imagenes/Cupheads.jpg'
import imgEldenRing from '../../imagenes/eldenRing.jpg'
import NewWorld from '../../imagenes/newWorld.jpg'

function UncontrolledExample() {
  return (
    <Carousel className='carrouselBS'>
      <Carousel.Item>
        <img
          className="d-block"
          src={imgCupHead}
          alt="CUPHEAD"
        />
        <Carousel.Caption>
          <h3 className='CarouselFont'>CUPHEAD</h3>
          <p className='CarouselFont'>Cuphead es un juego de acción clásico estilo "dispara y corre".</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={imgEldenRing}
          alt="Elden Ring"
        />

        <Carousel.Caption>
          <h3>ELDEN RING</h3>
          <p>Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={NewWorld}
          alt="New World"
        />

        <Carousel.Caption>
          <h3>NEW WORLD</h3>
          <p>
          Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;