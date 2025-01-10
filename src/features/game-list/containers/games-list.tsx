import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "./create-button";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => {
        return (
          <GameCard
            key={game.id}
            login={game.creator.login}
            rating={game.creator.rating}
            actions={
              <Button asChild>
                <Link href={`/game/${game.id}`}>Connect</Link>
              </Button>
            }
          />
        );
      })}
    </Layout>
  );
}
