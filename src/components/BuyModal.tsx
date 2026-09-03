import { useState } from "react";
import {Link} from 'react-router-dom';

import { type CartItem } from "../type/CartItem";

import { Modal } from "./Modal";

import { useWallet } from "../context/WalletContext";
import { useBuyModal } from "../context/BuyModalContext";
import { usePurchased } from "../context/PurchasedContext";
import { useCart } from "../context/CartContext";

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

    const gamesPrice = buyingGames.reduce((sum, item)=> sum + item.price, 0);
    const gameNames = buyingGames.map((game)=> game.name).join(',');

    const handleBuyResultModal = () => {
        const result = spend(gamesPrice, gameNames);

        if(result) {
            buyingGames.forEach((game)=> {
                addPurchase(game);
                removeFromCart(game.appID)
            })
            return setScreen('success');
        }
        return setScreen('insufficient');
    }


   if(screen === 'success') {
        return (
            <Modal onClose={closeBuyModal}>
                <h2>Transaction was successful</h2>
                <div>
                    <Link to='/library' onClick={()=> closeBuyModal()}>Go to Library</Link>
                    <Link to='/' onClick={()=> closeBuyModal()}>Go to Store</Link>
                </div>
            </Modal>
        )
   }

   if(screen === 'insufficient') {
    return (
        <Modal onClose={closeBuyModal}>
            <button onClick={()=> setScreen('confirm')}>Close</button>
            <h2>Transaction was not successful, check your balance</h2>
        </Modal>
    )
   }

   if(screen === 'confirm') {
        return (
            <Modal onClose={closeBuyModal}>
                <button onClick={closeBuyModal}>Close</button>
                <ul>
                {buyingGames.map((game) => (
                    <li key={game.appID}>
                        <img src={game.header_image} alt={game.name} />
                        <h2>{game.name}</h2>
                        <p>{game.price}</p>
                    </li>
                ))}
                </ul>
                <p>BALANCE:{balance}</p>
                <button onClick={handleBuyResultModal}>Buy</button>
            </Modal>
        )
   }

   return null;

}