import { type Game } from "../type/Game";

export const useSimilarGames = (game: Game | undefined, allGames: Game[]) => {
    if(!game) return [];
    const currentGenres = game.genres.split(',').map((g)=> g.trim());

    const similarGames = allGames.filter((g)=> 
        g.appID !== game.appID &&
        g.genres.split(',').map((genre)=>genre.trim()).some((genre)=> currentGenres.includes(genre))
    )

    return similarGames;
} 