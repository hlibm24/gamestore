import { type Game } from "../type/Game";
import { useCart } from "../context/CartContext";

interface PurchaseBoxProps {
    game: Game;
}

export const PurchaseBox = ({game}:PurchaseBoxProps) => {
    const {addToCart} = useCart();

    const handleAddToCart = () => {
        addToCart({
            appID: game.appID,
            name: game.name,
            header_image: game.header_image,
            price: game.price,
        })
    }

    return (
        <div className="purchase-box">
            <h3>{game.price}</h3>
            <button>Buy now</button>
            <button onClick={handleAddToCart}>Add to card</button>
        </div>
    )
}