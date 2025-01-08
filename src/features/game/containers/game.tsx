import { GameId } from "@/kernel/ids";
import { GameLayout } from "../ui/layout";
import { GameEntity } from "@/entities/game";
import { GamePlayers } from "../ui/players";

export function Game({ gameId }: { gameId: GameId }) {
  const game: GameEntity = {
    id: "1",
    creator: {
      id: "1",
      login: "Test",
      rating: 1000,
    },
    status: "idle",
  };
  return <GameLayout players={<GamePlayers game={game}></GamePlayers>} />;
}
