import './index.css' 
import { useCartContext } from '../../context/CartContext';
export const CartWidget = () => {
const {totalProducts} = useCartContext();

    return(
        <i className="bi bi-cart-fill">
            <span className='spanNumber'>{totalProducts() || 0}</span> </i>
    );
        
}