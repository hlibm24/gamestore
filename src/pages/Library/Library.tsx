import { usePurchased } from "../../context/PurchasedContext";
import { ItemsList } from '../../components/ItemsList/ItemsList';
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { Link } from "react-router-dom";

import './Library.css';

export const Library = () => {
    const {purchased} = usePurchased();

    if(purchased.length === 0) {
        return (
            <StatusMessage title='Your library is empty'>
                <Link to="/" className="back-to-store-link">Back to the store</Link>
            </StatusMessage>
        )
    }

    return (
        <div className="library container">
            <h1>Library</h1>
            <ItemsList games={purchased} />
        </div>
    )
}