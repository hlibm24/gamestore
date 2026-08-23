import { type Game } from "../type/Game";

interface PurchaseBoxProps {
    game: Game;
}

export const PurchaseBox = ({game}:PurchaseBoxProps) => {
    return (
        <div className="purchase-box">
            <h3>{game.price}</h3>
            <button>Buy now</button>
            <button>Add to card</button>
        </div>
    )
}