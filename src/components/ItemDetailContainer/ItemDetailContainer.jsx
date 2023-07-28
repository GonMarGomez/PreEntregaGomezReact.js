import React, {useEffect, useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import gifLoading from '../../imagenes/loadingGif.gif'
function ItemDetailContainer(){
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const [producto, setProducto] = useState({})

    
    useEffect(()=>{
        setLoading(true)
        getItem(id).then((res)=>setProducto(res)).catch((err)=>err)
        .finally(()=>setLoading(false))
    },[])
    return (
        <div>
        {
           loading ? <div className='imgLoading'><img src={gifLoading} alt='gif'></img></div>
              :
              <ItemDetail producto={producto}/>
            }
            </div>)
    
    
    

}
export default ItemDetailContainer;