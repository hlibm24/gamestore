import { createContext, useState, useContext, type ReactNode } from 'react';
import { type CartItem } from '../type/CartItem';

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (appID: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            const alreadyInCart = prev.some((cartItem) => cartItem.appID === item.appID);
            if(alreadyInCart) return prev;
            return [...prev, item];
        })
    };

    const removeFromCart = (appID: number) => {
        setCartItems((prev) => prev.filter((item) => item.appID !== appID));
    }
    console.log(cartItems)
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context;
}