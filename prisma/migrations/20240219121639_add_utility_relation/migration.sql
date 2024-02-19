/*
  Warnings:

  - Added the required column `bookingId` to the `Utility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Utility" ADD COLUMN     "bookingId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Utility" ADD CONSTRAINT "Utility_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
