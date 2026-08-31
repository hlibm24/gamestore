import { createContext, useState, useContext, type ReactNode, useEffect } from 'react'; 

interface WalletContextType {
    balance: number;
    addBalance: (addSum: number) => void;
    spend: (amount: number) => boolean;
}


const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider =({children}: {children: ReactNode}) => {

    const BALANCE_KEY = 'balance';
    const EARN_AMOUNT = 50; 
    const EARN_INTEVAL_MS = 60000;

    const [balance, setBalance] = useState<number>(()=> {
        const saved = localStorage.getItem(BALANCE_KEY);
        return saved ? JSON.parse(saved) : 0;
    });

    useEffect(()=> {
        localStorage.setItem(BALANCE_KEY, JSON.stringify(balance));
    }, [balance]);

    const addBalance = (addSum: number) => {
        setBalance(prev => prev + addSum);
    }

    useEffect(()=> {
        const interval = setInterval(()=> addBalance(EARN_AMOUNT), EARN_INTEVAL_MS);
        return ()=> clearInterval(interval);
    }, []);

    const spend = (amount: number): boolean => {
        
        if(amount <= balance) {
            setBalance(balance - amount)
            return true;
        }
        return false;
    }

    return (
        <WalletContext.Provider value={{balance, addBalance, spend}}>
            {children}
        </WalletContext.Provider>
    )     
}

export const useWallet = () => {
    const context = useContext(WalletContext);
    if(!context) {
        throw new Error('useWallet must be used within a WalletProvider')
    }
    return context;
}