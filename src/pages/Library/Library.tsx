import { usePurchased } from "../../context/PurchasedContext";
import { ItemsList } from '../../components/ItemsList/ItemsList';

import './Library.css';

export const Library = () => {
    const {purchased} = usePurchased();

    if(purchased.length === 0) {
        return <p>Your library is empty</p>
    }

    return (
        <div className="library container">
            <h1>Library</h1>
            <ItemsList games={purchased} />
        </div>
    )
}