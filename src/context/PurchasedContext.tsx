import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { type CartItem } from '../type/CartItem';

interface PurchasedContextType {
    purchased: CartItem[];
    addPurchase: (game: CartItem) => void;
    isPurchased: (appID: number) => boolean;
}

const PurchasedContext = createContext<PurchasedContextType | undefined>(undefined);
const STORAGE_KEY = 'purchased'

export const PurchasedProvider = ({children}: {children: ReactNode}) => {
    const [purchased, setPurchased] = useState<CartItem[]>(()=> {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=> {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(purchased));
    }, [purchased]);

    const addPurchase = (game: CartItem) => {
        setPurchased((prev)=> {
            const alreadyPurhcased = prev.some((item) => item.appID === game.appID);
            if(alreadyPurhcased) return prev;
            return [...prev, game];
        })
    };

    const isPurchased = (appID: number) => purchased.some((item) => item.appID === appID);

    return (
        <PurchasedContext.Provider value={{purchased, addPurchase, isPurchased}}>
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