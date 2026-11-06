import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
    useMemo,
    type ReactNode,
} from 'react';
import { isCartItem, type CartItem } from '../type/CartItem';
import { loadArrayFromStorage, saveToStorage } from '../utils/storage';

const STORAGE_KEY = 'purchased';

interface PurchasedContextType {
    purchased: CartItem[];
    addPurchase: (game: CartItem) => void;
    isPurchased: (appID: number) => boolean;
}

const PurchasedContext = createContext<PurchasedContextType | undefined>(undefined);

export const PurchasedProvider = ({children}: {children: ReactNode}) => {
    const [purchased, setPurchased] = useState<CartItem[]>(() =>
        loadArrayFromStorage(STORAGE_KEY, isCartItem),
    );

    useEffect(() => {
        saveToStorage(STORAGE_KEY, purchased);
    }, [purchased]);

    const addPurchase = useCallback((game: CartItem) => {
        setPurchased((prev) => {
            const alreadyPurchased = prev.some((item) => item.appID === game.appID);
            if (alreadyPurchased) return prev;
            return [...prev, game];
        });
    }, []);

    const isPurchased = useCallback(
        (appID: number) => purchased.some((item) => item.appID === appID),
        [purchased],
    );

    const value = useMemo(
        () => ({ purchased, addPurchase, isPurchased }),
        [purchased, addPurchase, isPurchased],
    );

    return (
        <PurchasedContext.Provider value={value}>
            {children}
        </PurchasedContext.Provider>
    )
}

export const usePurchased = () => {
    const context = useContext(PurchasedContext);
    if(!context) {
        throw new Error ('usePurchased must be used within a PurchasedProvider')
    }
    return context;
}