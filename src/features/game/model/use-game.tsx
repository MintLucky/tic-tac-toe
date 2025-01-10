import { useEventsSource } from "@/shared/lib/sse/client";
import { GameId } from "@/kernel/ids";
import { GameDomain } from "@/entities/game";
import { routes } from "@/kernel/routes";

export function useGame(gameId: GameId) {
  const { isPending, dataStream, error } =
    useEventsSource<GameDomain.GameEntity>(routes.gameStream(gameId));

  return {
    game: dataStream,
    isPending,
  };
}
