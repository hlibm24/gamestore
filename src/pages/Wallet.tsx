import { useWallet } from "../context/WalletContext";

export const Wallet = () => {
    const {balance, transactions} = useWallet();

    return (
        <div className="wallet-page">
            <section className="balance-info">
                <h2>Wallet info</h2>
                <p>"You earn 5 coins per minute just by staying on the site. Use your balance to buy games.</p>
                <span>BALANCE: {balance.toFixed(2)}</span>
                <span>5/min</span>
            </section>
            <section className="transaction-history">
                <h2>Transaction history</h2>
                <ul>
                    {transactions.map((transaction)=> (
                        <li key={transaction.id}>
                            <p>{transaction.description}</p>
                            <p>-{transaction.amount}</p>
                            <p>{new Date(transaction.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}