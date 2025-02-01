"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { right, matchEither, mapLeft } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";
import { startTransition } from "react";

export function CreateButton({}: { action?: () => Promise<void> }) {
  const [data, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={mapLeft(
        data,
        (e) =>
          ({
            ["can-create-only-one-game"]: "You can create no more than one game",
            ["user-not-found"]: "User doesn't exist",
          })[e],
      )}
    >
      Create Game
    </Button>
  );
}
