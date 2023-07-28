import React from 'react'
import Item from '../Item/Item.jsx'
import './ItemList.css'
const ItemList = ({productos}) => {
  return (
    <div className='producto'>
        {productos.map((i)=> <Item key={i.id} prod={i}/>)}
    </div>
  )
}

export default ItemList