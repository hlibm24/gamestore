import { Link } from 'react-router-dom';
import { type Game } from "../../type/Game";
import { useCart } from "../../context/CartContext";
import { usePurchased } from "../../context/PurchasedContext";
import { useBuyModal } from "../../context/BuyModalContext";

import './PurchaseBox.css';

interface PurchaseBoxProps {
    game: Game;
}

export const PurchaseBox = ({game}:PurchaseBoxProps) => {
    const {openBuyModal} = useBuyModal();

    const {addToCart, removeFromCart, isInCart} = useCart();
    const {addPurchase, isPurchased} = usePurchased();

    const inCart = isInCart(game.appID);
    const isFree = game.price === 0;
    const owned = isPurchased(game.appID);

    const handleCartClick = () => {
        if(inCart) {
            removeFromCart(game.appID);
        } else {
            addToCart({
                appID: game.appID,
                slug: game.slug,
                name: game.name,
                header_image: game.header_image,
                price: game.price,
            });
        }
    }

    const handleAddToLibrary = () => {
        addPurchase({
            appID: game.appID,
            slug: game.slug,
            name: game.name,
            header_image: game.header_image,
            price: game.price,
        });
    }

    const handleBuyNow = () => {
        openBuyModal([{
            appID: game.appID,
            slug: game.slug,
            name: game.name,
            header_image: game.header_image,
            price: game.price,
        }])
    }


    if(owned) {
        return (
            <div className="purchase-box">
                <h3>In your library</h3>
                <Link to="/library" className='library-link'>
                    Go to Library
                </Link>
            </div>
        )
    }

    if(isFree) return (
        <div className="purchase-box">
            <h3>Free to Play</h3>
            <div className='purchase-btns'>
                <button onClick={handleAddToLibrary} className='btn btn-primary'>Add to library</button>
            </div>
        </div>
    )

    return (
        <div className="purchase-box">
            <h3>${game.price}</h3>
            <div className='purchase-btns'>
                <button onClick={handleBuyNow} className='btn btn-primary'>Buy now</button>
                <button onClick={handleCartClick} className={`btn ${inCart ? 'btn-transparent' : 'btn-secondary'}`}>{inCart ? 'Remove from cart' : 'Add to cart'}</button>
            </div>
        </div>
    )
}