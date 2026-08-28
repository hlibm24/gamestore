import { type Game } from "../type/Game";
import { useCart } from "../context/CartContext";

interface PurchaseBoxProps {
    game: Game;
}

export const PurchaseBox = ({game}:PurchaseBoxProps) => {
    const {addToCart, removeFromCart, isInCart} = useCart();

    const inCart = isInCart(game.appID);

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

    return (
        <div className="purchase-box">
            <h3>{game.price}</h3>
            <button>Buy now</button>
            <button onClick={handleCartClick}>{inCart ? 'Remove from cart' : 'Add to cart'}</button>
        </div>
    )
}