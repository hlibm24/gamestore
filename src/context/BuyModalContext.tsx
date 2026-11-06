import { createContext,
    useContext,
    useState,
    useCallback,
    useMemo,
    type ReactNode 
} from "react";
import { type CartItem } from "../type/CartItem";

interface BuyModalContextType {
    buyingGames: CartItem[] | null;
    openBuyModal: (games: CartItem[]) => void;
    closeBuyModal: () => void;
}

const BuyModalContext = createContext<BuyModalContextType | undefined>(undefined);

export const BuyModalProvider = ({children}: {children: ReactNode}) => {
    const [buyingGames, setBuyingGames] = useState<CartItem[] | null>(null);

    const openBuyModal = useCallback((games: CartItem[]) => {
        setBuyingGames(games);
    }, []);

    const closeBuyModal = useCallback(() => {
        setBuyingGames(null);
    }, []);

    const value = useMemo(
        () => ({buyingGames, openBuyModal, closeBuyModal}),
        [buyingGames, openBuyModal, closeBuyModal]
    );

    return (
        <BuyModalContext.Provider value={value}>
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