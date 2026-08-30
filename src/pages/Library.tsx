import { usePurchased } from "../context/PurchasedContext";

export const Library = () => {
    const {purchased} = usePurchased();

    if(purchased.length === 0) {
        return <p>Your library is empty</p>
    }

    return (
        <div className="library">
            <h1>Library</h1>
            <ul>
                {purchased.map((game) => (
                    <li key={game.appID}>
                        <img src={game.header_image} alt={game.name} />
                        <p>{game.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}