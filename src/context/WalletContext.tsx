import {
    createContext,
    useState,
    useContext,
    type ReactNode,
    useEffect,
    useCallback,
    useMemo,
} from 'react';
import { type Transaction } from '../type/Transaction';
import { roundMoney } from '../utils/roundMoney';
import { loadArrayFromStorage, loadFromStorage, saveToStorage } from '../utils/storage';

const ALL_TRANSACTIONS = 'transactions';
const BALANCE_KEY = 'balance';
const EARN_AMOUNT = 5;
const EARN_INTERVAL_MS = 60000;

interface WalletContextType {
    transactions: Transaction[];
    balance: number;
    addBalance: (addSum: number) => void;
    spend: (amount: number, description: string) => boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

function isTransaction(value: unknown): value is Transaction {
    if (typeof value !== 'object' || value === null) return false;

    const transaction = value as Record<string, unknown>;
    return (
        typeof transaction.id === 'number' &&
        Number.isFinite(transaction.id) &&
        transaction.type === 'spend' &&
        typeof transaction.amount === 'number' &&
        Number.isFinite(transaction.amount) &&
        typeof transaction.date === 'number' &&
        Number.isFinite(transaction.date) &&
        typeof transaction.description === 'string'
    );
}

function loadBalance(): number {
    const saved = loadFromStorage<unknown>(BALANCE_KEY, 0);
    if (typeof saved === 'number' && Number.isFinite(saved)) return saved;

    console.error(`Invalid balance data in localStorage key '${BALANCE_KEY}'`);
    return 0;
}

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>(() =>
        loadArrayFromStorage(ALL_TRANSACTIONS, isTransaction),
    );

    useEffect(() => {
        saveToStorage(ALL_TRANSACTIONS, transactions);
    }, [transactions]);

    const [balance, setBalance] = useState<number>(loadBalance);

    useEffect(() => {
        saveToStorage(BALANCE_KEY, balance);
    }, [balance]);

    const addBalance = useCallback((addSum: number) => {
        setBalance(prev => roundMoney(prev + addSum));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => addBalance(EARN_AMOUNT), EARN_INTERVAL_MS);
        return () => clearInterval(interval);
    }, [addBalance]);

    const spend = useCallback((amount: number, description: string): boolean => {
        if (amount <= balance) {
            setBalance(roundMoney(balance - amount));

            const newTransaction: Transaction = {
                id: Date.now(),
                type: 'spend',
                amount: roundMoney(amount),
                date: Date.now(),
                description,
            };
            setTransactions(prev => [...prev, newTransaction]);
            return true;
        }
        return false;
    }, [balance]);


    const value = useMemo(
        () => ({ balance, addBalance, spend, transactions }),
        [balance, addBalance, spend, transactions],
    );

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
}

export const useWallet = () => {
    const context = useContext(WalletContext);
    if(!context) {
        throw new Error('useWallet must be used within a WalletProvider')
    }
    return context;
}