import { getIdleGames } from "@/entities/game/server";
import { Card, CardTitle, CardContent } from "@/shared/ui/card" 

export async function GamesList() {
  const games = await getIdleGames()

  return (
    <div className="grid grid-cols-2 gap-4">
      {games.map(game => {
        return (
          <Card key={game.id}>
            <CardTitle>
                Organizator: {game.creator.login}
            </CardTitle>
            <CardContent>
                Rate: {game.creator.rating}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}