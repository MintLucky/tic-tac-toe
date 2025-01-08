import { GameEntity } from "@/entities/game";
import React from "react";

export function GameStatus({ game }: { game: GameEntity }) {

  switch (game.status) {
    case 'idle':
      return <div className="flex flex-col gap-4 justify-between">
        <div className="text-lg">
          x - {game.creator.login}
        </div>
        <div className="text-lg">
          o - pending
        </div>
      </div>
    case 'inProgress':
    case 'gameOver':
    case 'gameOverDraw'
  }
}
