import { createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import { type CartItem } from '../type/CartItem';

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (appID: number) => void;
    isInCart: (appID: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: { children: ReactNode }) => {

    const STORAGE_KEY = 'cart_items';

    const [cartItems, setCartItems] = useState<CartItem[]>(()=> {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=> {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

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

    const isInCart = (appID: number) => cartItems.some((item) => item.appID === appID);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
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