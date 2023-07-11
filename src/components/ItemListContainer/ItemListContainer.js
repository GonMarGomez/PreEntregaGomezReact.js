import './index.css'
import React from 'react';

function ItemListContainer({titulo = 'Error enasd'}) {
    return (
    <><div className='itemContainer'>        
       <h2 className='itemContainerTitulo'>{titulo}</h2>
    </div></>
    )
}

//export
export default ItemListContainer;