import { useEventsSource } from "@/shared/lib/sse/client";
import { GameId } from "@/kernel/ids";
import { GameDomain } from "@/entities/game";

export function useGame(gameId: GameId) {
  const { isPending, dataStream, error } =
    useEventsSource<GameDomain.GameEntity>(`/game/${gameId}/stream`);

  return {
    game: dataStream,
    isPending,
  };
}
