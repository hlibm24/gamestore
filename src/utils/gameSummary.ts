import { type Game } from "../type/Game";

export type GameSummary = Pick<Game, "appID" | "slug" | "name" | "header_image" | "price">;