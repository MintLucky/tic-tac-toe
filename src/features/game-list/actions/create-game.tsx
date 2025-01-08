"use server";

import { createGame } from "@/entities/game/server";
import { sessionService } from "@/entities/user/server";
import { prisma } from "@/shared/lib/db";
import { left } from "@/shared/lib/either";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/entities/user/server";

export const createGameAction = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return left("user-not-found" as const);
  }
  const gameResult = await createGame(user);

  if (gameResult.type === "right") {
    redirect(`/game/${gameResult.value.id}`);
  }

  return gameResult;
};
