import { createContext, useContext, useState, type ReactNode } from "react";
import { type CartItem } from "../type/CartItem";

interface BuyModalContextType {
    buyingGames: CartItem[] | null;
    openBuyModal: (games: CartItem[]) => void;
    closeBuyModal: () => void;
}

const BuyModalContext = createContext<BuyModalContextType | undefined>(undefined);

export const BuyModalProvider = ({children}: {children: ReactNode}) => {
    const [buyingGames, setBuyingGames] = useState<CartItem[] | null>(null);

    const openBuyModal = (games: CartItem[]) => {
        setBuyingGames(games);
    }

    const closeBuyModal = () => {
        setBuyingGames(null);
    }

    return (
        <BuyModalContext.Provider value={{buyingGames, openBuyModal, closeBuyModal}}>
            {children}
        </BuyModalContext.Provider>
    )
}

export const useBuyModal = () => {
    const context = useContext(BuyModalContext);
    if(!context) {
        throw new Error ('useBuyModal must be used within a BuyModalProvider');
    }
    return context;
}