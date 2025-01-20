import { useEventsSource } from "@/shared/lib/sse/client";
import { GameId } from "@/kernel/ids";
import { GameDomain } from "@/entities/game";
import { routes } from "@/kernel/routes";
import { useEffect, useTransition } from "react";
import { gameStepAction } from "../actions/game-step";

export function useGame(gameId: GameId) {
  const { isPending, dataStream } = useEventsSource<GameDomain.GameEntity>(
    routes.gameStream(gameId),
  );

  const [isPendingTransition, startTransition] = useTransition();

  const step = (index: number) => {
    startTransition(async () => {
      await gameStepAction({ gameId, index });
    });
  };


  return {
    game: dataStream,
    step,
    isPending: isPending || isPendingTransition,
    isStepPending: isPendingTransition,
  };
}
