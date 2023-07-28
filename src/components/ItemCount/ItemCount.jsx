import React, {useState} from "react";
import { Button } from "react-bootstrap";
function ItemCount({stock,onAdd,initial}){
    const [count, setCount] = useState(initial)
    function sumar(){
    if (count < stock) {            
     setCount(count + 1)
    }
    }
    function restar(){
    if(count > 0){
    setCount(count -1)
    }
    }
return(
    <div className="d-flex flex-column align-items-center">
        <div>
        <Button variant="light" onClick={restar}>-</Button>
        <span className="btn">{count}</span>
        <Button variant="light" onClick={sumar}>+</Button>            
        </div>
    < Button className="mt-2" variant="light" disabled={count === 0} onClick={()=>onAdd(count)}>COMPRAR</Button>
    </div>
)
}
export default ItemCount;