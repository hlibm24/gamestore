import { type Game } from "../type/Game";
import { parseCommaList } from "../utils/parseCommaList";

export const useSimilarGames = (game: Game | undefined, allGames: Game[]) => {
    if(!game) return [];
    const currentGenres = parseCommaList(game.genres);

    const similarGames = allGames.filter((g)=> 
        g.appID !== game.appID &&
        parseCommaList(g.genres).some((genre)=> currentGenres.includes(genre))
    )

    return similarGames;
} 