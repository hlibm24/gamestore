import { useBuyModal } from "../context/BuyModalContext";
import { BuyModal } from "./BuyModal";

export const BuyModalHost = () => {
    const {buyingGames} = useBuyModal();

    if(!buyingGames) return null;

    return <BuyModal buyingGames={buyingGames} />

}