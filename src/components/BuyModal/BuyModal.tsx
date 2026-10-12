import { useState } from "react";
import {Link} from 'react-router-dom';
import { Close } from '@zcorpo/react-material-symbols/400/rounded';
import { roundMoney } from "../../utils/roundMoney";

import { type CartItem } from "../../type/CartItem";

import { Modal } from "../Modal/Modal";

import { useWallet } from "../../context/WalletContext";
import { useBuyModal } from "../../context/BuyModalContext";
import { usePurchased } from "../../context/PurchasedContext";
import { useCart } from "../../context/CartContext";

import './BuyModal.css';


interface BuyModalProps {
    buyingGames: CartItem[];
}

export const BuyModal = ({buyingGames}: BuyModalProps) => {
    const {spend, balance} = useWallet();
    const {closeBuyModal} = useBuyModal();
    const {addPurchase} = usePurchased();
    const {removeFromCart} = useCart();


    type Screen = 'confirm' | 'insufficient' | 'success';
    const [screen, setScreen] = useState<Screen>('confirm');

    const gamesPrice = roundMoney(buyingGames.reduce((sum, item)=> sum + item.price, 0));
    const gamesNames = buyingGames.map((game)=> game.name).join(',');

    const handleBuyResultModal = () => {
        const result = spend(gamesPrice, gamesNames);

        if(result) {
            buyingGames.forEach((game)=> {
                addPurchase(game);
                removeFromCart(game.appID)
            })
            return setScreen('success');
        }
        return setScreen('insufficient');
    }

   if(screen === 'confirm') {
        return (
            <Modal>
                <button className="modal-close" onClick={closeBuyModal} aria-label="Close"><Close/></button>
                <h2 className="modal-title">Confirm purchase</h2>
                <ul className="modal-games">
                {buyingGames.map((game) => (
                    <li key={game.appID} className="modal-game">
                        <img src={game.header_image} alt={game.name} />
                        <h3>{game.name}</h3>
                        <p className="modal-game-price">${game.price}</p>
                    </li>
                ))}
                </ul>
                <p className="modal-balance">BALANCE: <span>${balance.toFixed(2)}</span></p>
                <button className="btn btn-primary" onClick={handleBuyResultModal}>Buy</button>
            </Modal>
        )
   }

   if(screen === 'success') {
        return (
            <Modal>
                <button className="modal-close" onClick={closeBuyModal} aria-label="Close"><Close/></button>
                <h2 className="modal-title modal-title-success">Transaction was successful</h2>
                <div className="modal-actions">
                    <Link to='/library' onClick={closeBuyModal} className="modal-link">Go to Library</Link>
                    <Link to='/' onClick={closeBuyModal} className="modal-link">Go to Store</Link>
                </div>
            </Modal>
        )
   }

   if(screen === 'insufficient') {
    return (
        <Modal>
            <button className="modal-close" onClick={()=> setScreen('confirm')} aria-label="Close"><Close/></button>
            <h2 className="modal-title modal-title-error">Transaction was not successful, check your balance</h2>
        </Modal>
    )
   }

   return null;

}