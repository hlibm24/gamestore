import { Link } from 'react-router-dom';
import { useMemo } from 'react';

import { useCart } from "../context/CartContext";
import { useBuyModal } from "../context/BuyModalContext";

export const Cart = () => {
    const {openBuyModal} = useBuyModal();

    const {cartItems, removeFromCart} = useCart();

    if(cartItems.length === 0) {
        return <p>Your cart is empty</p>
    }

    const total = useMemo(()=> cartItems.reduce((sum, item) => sum + item.price, 0), [cartItems]);

    return (
        <div className="cart">
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item)=> (
                    <li key={item.appID}>
                        <Link to={`/games/${item.slug}`}>
                            <img src={item.header_image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(item.appID);
                            }}>Remove</button>
                        </Link>
                    </li>
                ))}
            </ul>
            <h2>Total: {total}</h2>
            <button onClick={()=>openBuyModal(cartItems)}>Buy the Games</button>
        </div>
    )

}