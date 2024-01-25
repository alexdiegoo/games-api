/*
  Warnings:

  - You are about to drop the column `model` on the `Game` table. All the data in the column will be lost.
  - Added the required column `mode` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "model",
ADD COLUMN     "mode" TEXT NOT NULL;
