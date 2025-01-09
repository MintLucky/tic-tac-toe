"use client";

import { GameId } from "@/kernel/ids";
import { GameLayout } from "../ui/layout";
import { GameDomain } from "@/entities/game";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useEventsSource } from "@/shared/lib/sse/client";

export function Game({ gameId }: { gameId: GameId }) {
  const { dataStream, error } = useEventsSource(`/game/${gameId}/stream`, 1);

  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      {
        id: "1",
        login: "Test",
        rating: 1000,
      },
      {
        id: "2",
        login: "Test2",
        rating: 500,
      },
    ],
    status: "inProgress",
    field: [null, null, null, "x", "o", null, null, null, null],
  };
  return (
    <div>
      {dataStream}

      {error ? `Error ${JSON.stringify(error)}` : undefined}
    </div>
  );
  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
