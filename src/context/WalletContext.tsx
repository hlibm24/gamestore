import { createContext, useState, useContext, type ReactNode, useEffect } from 'react'; 
import { type Transaction } from '../type/Transaction';

interface WalletContextType {
    transactions: Transaction[];
    balance: number;
    addBalance: (addSum: number) => void;
    spend: (amount: number, description: string) => boolean;
}


const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider =({children}: {children: ReactNode}) => {

    const ALL_TRANSACTIONS = 'transactions'
    const BALANCE_KEY = 'balance';
    const EARN_AMOUNT = 5; 
    const EARN_INTEVAL_MS = 60000;

    const [transactions, setTransactions] = useState<Transaction[]>(()=> {
        const saved = localStorage.getItem(ALL_TRANSACTIONS);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=> {
        localStorage.setItem(ALL_TRANSACTIONS, JSON.stringify(transactions));
    }, [transactions]);


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

    const spend = (amount: number, description: string): boolean => {
        
        if(amount <= balance) {
            setBalance(balance - amount);

            const newTransaction: Transaction = {
                id: Date.now(),
                type: 'spend',
                amount: amount,
                date: Date.now(),
                description: description,
            }
            setTransactions(prev=> [...prev, newTransaction]);
            return true;
        }
        return false;
    }

    return (
        <WalletContext.Provider value={{balance, addBalance, spend, transactions}}>
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