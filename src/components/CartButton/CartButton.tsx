import { ShoppingCart } from '@zcorpo/react-material-symbols/400/rounded';
import { useCart } from "../../context/CartContext";

import './CartButton.css';

export const CartButton = () => {
    const { cartItems } = useCart();
    const count = cartItems.length;

    return (
        <button type="button" className="cart" aria-label="Cart">
            <ShoppingCart className="svg-shoppingCart"/>
            {count > 0 && <span className="cart-badge">{count}</span>}
        </button>
    )
}