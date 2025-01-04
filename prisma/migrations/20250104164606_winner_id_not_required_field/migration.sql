/*
  Warnings:

  - You are about to drop the `_game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_winnerId_fkey";

-- DropForeignKey
ALTER TABLE "_game" DROP CONSTRAINT "_game_A_fkey";

-- DropForeignKey
ALTER TABLE "_game" DROP CONSTRAINT "_game_B_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "winnerId" DROP NOT NULL;

-- DropTable
DROP TABLE "_game";

-- CreateTable
CREATE TABLE "_games" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_games_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_games_B_index" ON "_games"("B");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_games" ADD CONSTRAINT "_games_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_games" ADD CONSTRAINT "_games_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
