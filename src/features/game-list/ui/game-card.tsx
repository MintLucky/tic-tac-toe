import { Card, CardTitle, CardContent } from "@/shared/ui/card";

export async function GameCard({
  login,
  rating,
}: {
  login: string;
  rating: number;
}) {
  return (
    <Card>
      <CardTitle>Game with: {login}</CardTitle>
      <CardContent>Rate: {rating}</CardContent>
    </Card>
  );
}
