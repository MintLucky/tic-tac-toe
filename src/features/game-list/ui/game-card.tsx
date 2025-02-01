import { Card, CardTitle, CardContent, CardFooter } from "@/shared/ui/card";

export function GameCard({
  login,
  rating,
  actions,
}: {
  login: string;
  rating: number;
  actions: React.ReactNode;
}) {
  return (
    <Card>
      <CardTitle>Game with: {login}</CardTitle>
      <CardContent>Rate: {rating}</CardContent>
      <CardFooter>{actions}</CardFooter>
    </Card>
  );
}
