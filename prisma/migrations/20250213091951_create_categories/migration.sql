/*
  Warnings:

  - You are about to drop the column `artistId` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `genreId` on the `Music` table. All the data in the column will be lost.
  - Added the required column `artistName` to the `Music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreName` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Music` DROP FOREIGN KEY `Music_artistId_fkey`;

-- DropForeignKey
ALTER TABLE `Music` DROP FOREIGN KEY `Music_genreId_fkey`;

-- DropIndex
DROP INDEX `Music_artistId_idx` ON `Music`;

-- DropIndex
DROP INDEX `Music_genreId_idx` ON `Music`;

-- AlterTable
ALTER TABLE `Music` DROP COLUMN `artistId`,
    DROP COLUMN `genreId`,
    ADD COLUMN `artistName` VARCHAR(255) NOT NULL,
    ADD COLUMN `genreName` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE INDEX `Music_artistName_idx` ON `Music`(`artistName`);

-- CreateIndex
CREATE INDEX `Music_genreName_idx` ON `Music`(`genreName`);

-- AddForeignKey
ALTER TABLE `Music` ADD CONSTRAINT `Music_artistName_fkey` FOREIGN KEY (`artistName`) REFERENCES `Artist`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Music` ADD CONSTRAINT `Music_genreName_fkey` FOREIGN KEY (`genreName`) REFERENCES `Genre`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
