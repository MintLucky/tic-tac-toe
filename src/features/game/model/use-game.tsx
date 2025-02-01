// import { useEventsSource } from "@/shared/lib/sse/client";
// import { GameId } from "@/kernel/ids";
// import { GameDomain } from "@/entities/game";
// import { routes } from "@/kernel/routes";
// import { useEffect, useOptimistic, useTransition } from "react";
// import { gameStepAction } from "../actions/game-step";

// export function useGame(gameId: GameId, player: GameDomain.PlayerEntity) {
//   const { isPending, dataStream } = useEventsSource<GameDomain.GameEntity>(
//     routes.gameStream(gameId),
//   );

//   const [isPendingTransition, startTransition] = useTransition();

//   const [optimisticGame, dispatchOptimistic] = useOptimistic(
//     dataStream,
//     (game, index: number) => {
//       if (!game || game.status !== "inProgress") {
//         return game;
//       }
//       const result = GameDomain.doStep({ game, player, index });

//       if (result.type === "right") {
//         return result.value;
//       }

//       return game;
//     },
//   );

//   const step = (index: number) => {
//     startTransition(async () => {
//       dispatchOptimistic(index);
//       await gameStepAction({ gameId, index });
//     });
//   };

//   return {
//     game: optimisticGame,
//     step,
//     isPending: isPending || isPendingTransition,
//     isStepPending: isPendingTransition,
//   };
// }

import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { useEventsSource } from "@/shared/lib/sse/client";
import { startTransition, useState } from "react";
import { gameStepAction } from "../actions/game-step";

export function useGame(gameId: GameId, player: GameDomain.PlayerEntity) {
  const { isPending, dataStream: game } =
    useEventsSource<GameDomain.GameEntity>(routes.gameStream(gameId), () => {
      dispatchOptimistic(undefined);
    });
  const [optimisticGame, dispatchOptimistic] =
    useState<GameDomain.GameEntity>();

  const step = (index: number) => {
    if (game && game.status === "inProgress") {
      const result = GameDomain.doStep({ game, player, index });
      if (result.type === "right") {
        dispatchOptimistic(result.value);
      }
    }
    startTransition(async () => {
      await gameStepAction({ gameId, index });
    });
  };

  return {
    game: optimisticGame ?? game,
    step,
    isPending: isPending,
  };
}