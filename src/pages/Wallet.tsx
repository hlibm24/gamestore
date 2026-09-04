import { useWallet } from "../context/WalletContext";

export const Wallet = () => {
    const {balance, transactions} = useWallet();

    return (
        <div className="wallet-page">
            <div className="balance-info">
                <p>"Stay on the site to earn money over time. Once your balance is high enough, you can spend it on games.</p>
                <span>BALANCE: {balance.toFixed(2)}</span>
                <span>5/min</span>
            </div>
            <div className="transaction-history">
                <h2>Transaction history</h2>
                <ul>
                    {transactions.map((transaction)=> (
                        <li key={transaction.id}>
                            <p>{transaction.description}</p>
                            <p>{transaction.amount}</p>
                            <p>{new Date(transaction.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}