import { useBuyModal } from "../context/BuyModalContext";
import { BuyModal } from "./BuyModal/BuyModal";

export const BuyModalHost = () => {
    const {buyingGames} = useBuyModal();

    if(!buyingGames) return null;

    return <BuyModal buyingGames={buyingGames} />

}