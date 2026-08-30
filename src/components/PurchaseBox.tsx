import { type Game } from "../type/Game";
import { useCart } from "../context/CartContext";
import { usePurchased } from "../context/PurchasedContext";

interface PurchaseBoxProps {
    game: Game;
}

export const PurchaseBox = ({game}:PurchaseBoxProps) => {
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
                name: game.name,
                header_image: game.header_image,
                price: game.price,
            });
        }
    }

    const handleAddToLibrary = () => {
        addPurchase(game);
    }


    if(isFree) return (
        <div className="purchase-box">
            <h3>Free</h3>
            <button onClick={handleAddToLibrary} disabled={owned}>
                {owned ? 'In library' : 'Add to library'}
            </button>
        </div>
    )

    return (
        <div className="purchase-box">
            <h3>{game.price}</h3>
            <button>Buy now</button>
            <button onClick={handleCartClick}>{inCart ? 'Remove from cart' : 'Add to cart'}</button>
        </div>
    )
}