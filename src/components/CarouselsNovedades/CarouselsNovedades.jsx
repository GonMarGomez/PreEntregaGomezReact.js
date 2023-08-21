import React, { useEffect, useState } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import './index.css';
import { getProducts } from '../../data/data'; 

function UncontrolledExample() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
 
    getProducts()
      .then((items) => {
        setProducts(items);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
  }, []); 

  return (
    <Carousel className='carrouselBS'>
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block"
            src={product.img} 
            alt={product.title} 
          />
          <Carousel.Caption>
            <h3 className='CarouselFont'>{product.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;