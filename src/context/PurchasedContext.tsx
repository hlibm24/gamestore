import { createContext, useState, useContext, type ReactNode } from 'react';
import { type Game } from '../type/Game';

interface PurchasedContextType {
    purchased: Game[];
    addPurchase: (game: Game) => void;
    isPurchased: (appID: number) => boolean;
}

const PurchasedContext = createContext<PurchasedContextType | undefined>(undefined);

export const PurchasedProvider = ({children}: {children: ReactNode}) => {
    const [purchased, setPurchased] = useState<Game[]>([]);

    const addPurchase = (game: Game) => {
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