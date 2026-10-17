import { useWallet } from "../../context/WalletContext";

import './Wallet.css';

export const Wallet = () => {
    const {balance, transactions} = useWallet();

    return (
        <div className="wallet-page container">
            <section className="balance-info">
                <h2>Wallet info</h2>
                <p>You earn 5 coins per minute just by staying on the site. Use your balance to buy games.</p>

                <div className="balance-box">
                    <span className="balance-label">Balance</span>
                    <div className="balance-row">
                        <span className="balance-value">${balance.toFixed(2)}</span>
                        <span className="balance-rate">$5/min</span>
                    </div>
                </div>

            </section>
            <section className="transaction-history">
                <h2>Transaction history</h2>

                {transactions.length > 0 ? 
                    <ul>
                        {transactions.map((transaction)=> (
                            <li key={transaction.id} className="transaction">
                                <p className="transaction-description">{transaction.description}</p>
                                <p className="transaction-amount">-${transaction.amount}</p>
                                <p className="transaction-date">{new Date(transaction.date).toLocaleString()}</p>
                            </li>
                        ))}
                    </ul>
                : 
                <p className='no-transactions'>You have no transactions yet</p>}
            </section>
        </div>
    )
}