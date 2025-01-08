import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/shared/ui/card";
import React from "react";

export function GameLayout({
  status,
  field,
  actions,
  players,
}: {
  status?: React.ReactNode;
  field?: string;
  actions?: React.ReactNode;
  players?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tit tac toe 3x3</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        {field}
      </CardContent>
      <CardFooter>{actions}</CardFooter>
    </Card>
  );
}
