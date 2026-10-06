import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { roundMoney } from '../../utils/roundMoney';

import { useCart } from "../../context/CartContext";
import { useBuyModal } from "../../context/BuyModalContext";

import './Cart.css';

export const Cart = () => {
    const {openBuyModal} = useBuyModal();

    const {cartItems, removeFromCart} = useCart();

    if(cartItems.length === 0) {
        return (
            <section className='cart-section container'>
                <h2>Your cart is empty</h2>
                <Link to="/" className='back-to-store-link'>Back to the store</Link>
            </section>
        )
    }

    const total = useMemo(()=> roundMoney(cartItems.reduce((sum, item) => sum + item.price, 0)), [cartItems]);

    return (
        <section className='cart-section container'>
                <h2>Shopping cart items ({cartItems.length})</h2>
            <div className="cart-page">
                <ul className='cart-list'>
                    {cartItems.map((item)=> (
                        <li key={item.appID} className='cart-item'>
                            <div className='item-about'>
                                <Link to={`/games/${item.slug}`} className='item-link'>
                                    <img src={item.header_image} alt={item.name} />
                                </Link>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>${item.price}</p>
                            </div>
                            <button onClick={() =>removeFromCart(item.appID)
                            }
                            className='remove-btn'
                            aria-label={`Delete ${item.name} from cart`}>Remove</button>
                        </li>
                    ))}
                </ul>
                <div className='buying-zone'>
                    <h3>Total: ${total}</h3>
                    <button onClick={()=>openBuyModal(cartItems)}
                    className='buy-btn'>Buy the Games</button>
                </div>
            </div>
        </section>
    )

}