import { sessionService } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await sessionService.verifySession();

  return (
    <div className="flex flex-col grow">
      <header className="px-10 py-4 flex flex-row gap-4 justify-between border-b border-b-primary/50">
        <div>Tik tak toe</div>
        <div className="flex items-center gap-4">
          <div className="text-lg">{session.login}</div>
          <form
            action={async () => {
              "use server";
              sessionService.deleteSession();
              redirect("/sign-in");
            }}
          >
            <Button>Sign out</Button>
          </form>
        </div>
      </header>
      {children}
    </div>
  );
}
