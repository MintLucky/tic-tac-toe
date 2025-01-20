"use client";

import { GameDomain } from "@/entities/game";

export function GameField({
  game,
  onCellClick,
}: {
  game: GameDomain.GameEntity;
  onCellClick?: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-3">
      {console.log(game)}
      {game.field.map((symbol, index) => (
        <button
          onClick={() => onCellClick?.(index)}
          key={index}
          className="border border-primary w-10 h-10 flex justify-center items-center text-white"
        >
          {symbol ?? ""}
        </button>
      ))}
    </div>
  );
}
