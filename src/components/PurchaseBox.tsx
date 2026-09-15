import { Link } from 'react-router-dom';
import { type Game } from "../type/Game";
import { useCart } from "../context/CartContext";
import { usePurchased } from "../context/PurchasedContext";
import { useBuyModal } from "../context/BuyModalContext";

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
                <Link to="/library">
                    <button>Go to Library</button>
                </Link>
            </div>
        )
    }

    if(isFree) return (
        <div className="purchase-box">
            <h3>Free</h3>
            <button onClick={handleAddToLibrary}>Add to library</button>
        </div>
    )

    return (
        <div className="purchase-box">
            <h3>{game.price}</h3>
            <button onClick={handleBuyNow}>Buy now</button>
            <button onClick={handleCartClick}>{inCart ? 'Remove from cart' : 'Add to cart'}</button>
        </div>
    )
}