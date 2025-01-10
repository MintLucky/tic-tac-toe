import { gameRepository } from "../repositories/game";
import { GameId } from "@/kernel/ids";

export async function getGameById(gameId: GameId) {
  return gameRepository.getGame({ id: gameId });
}
