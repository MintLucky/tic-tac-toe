/*
  Warnings:

  - You are about to drop the column `name` on the `Game` table. All the data in the column will be lost.
  - Added the required column `status` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnerId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('idle', 'inProgress', 'gameOver', 'gameOverDraw');

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "name",
ADD COLUMN     "gameOverAt" TEXT,
ADD COLUMN     "status" "GameStatus" NOT NULL,
ADD COLUMN     "winnerId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_game" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_game_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_game_B_index" ON "_game"("B");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_game" ADD CONSTRAINT "_game_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_game" ADD CONSTRAINT "_game_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
