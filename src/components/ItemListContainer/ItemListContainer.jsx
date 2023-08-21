import './index.css'
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';
import gifLoading from '../../imagenes/loadingGif.gif'


function ItemListContainer({ titulo }) {
   const [loading, setLoading] = useState(false)
   const { id } = useParams()
   const [productos, setProductos] = useState([])
   useEffect(() => {
      setLoading(true)
      getProducts()
         .then((res) => {
            if (id) {
               setProductos(res.filter((i) => i.category === id))
            }
            else {
               setProductos(res)
            }
         })
         .catch((error) => console.log(error))
         .finally(() => setLoading(false))
   }, [id])

   return (
      <div>
         {
            loading ? <div className='imgLoading'><img src={gifLoading} alt='gif'></img></div>
               :
               <section className='section'>
                  <div className='itemContainer'>
                     <h1 className='itemContainerTitulo'>{titulo} <span>{id && id}</span></h1>
                     <ItemList productos={productos} />
                  </div>
               </section>
         }
      </div>

   )
}

export default ItemListContainer;