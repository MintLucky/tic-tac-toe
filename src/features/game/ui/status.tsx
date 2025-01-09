import { GameDomain } from "@/entities/game";
import React from "react";

export function GameStatus({ game }: { game: GameDomain.GameEntity }) {
  switch (game.status) {
    case "idle":
      return <div className="text-lg">Waiting for a player</div>;

    case "inProgress": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">Current symbol is: {currentSymbol}</div>;
    }
    case "gameOver": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">Winner is: {currentSymbol}</div>;
    }
    case "gameOverDraw": {
      return <div className="text-lg">Nobody won. Draw game</div>;
    }
  }
}
