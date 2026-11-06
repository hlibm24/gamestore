import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo,
    type ReactNode,
} from 'react';
import { isCartItem, type CartItem } from '../type/CartItem';
import { loadArrayFromStorage, saveToStorage } from '../utils/storage';

const STORAGE_KEY = 'cart_items';

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (appID: number) => void;
    isInCart: (appID: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() =>
        loadArrayFromStorage(STORAGE_KEY, isCartItem),
    );

    useEffect(() => {
        saveToStorage(STORAGE_KEY, cartItems);
    }, [cartItems]);

    const addToCart = useCallback((item: CartItem) => {
        setCartItems((prev) => {
            if (prev.some((cartItem) => cartItem.appID === item.appID)) return prev;
            return [...prev, item];
        });
    }, []);

    const removeFromCart = useCallback((appID: number) => {
        setCartItems((prev) => prev.filter((item) => item.appID !== appID));
    }, []);

    const isInCart = useCallback(
        (appID: number) => cartItems.some((item) => item.appID === appID),
        [cartItems],
    );

    const value = useMemo(
        () => ({ cartItems, addToCart, removeFromCart, isInCart }),
        [cartItems, addToCart, removeFromCart, isInCart],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};