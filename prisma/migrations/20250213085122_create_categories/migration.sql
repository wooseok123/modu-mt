/*
  Warnings:

  - You are about to drop the column `artist` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Music` table. All the data in the column will be lost.
  - Added the required column `artistId` to the `Music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreId` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Music` DROP COLUMN `artist`,
    DROP COLUMN `genre`,
    ADD COLUMN `artistId` INTEGER NOT NULL,
    ADD COLUMN `genreId` INTEGER NOT NULL,
    ADD COLUMN `playCount` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `imageUrl` VARCHAR(255) NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `imageUrl` VARCHAR(255) NULL,

    UNIQUE INDEX `Artist_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Music_artistId_idx` ON `Music`(`artistId`);

-- CreateIndex
CREATE INDEX `Music_genreId_idx` ON `Music`(`genreId`);

-- AddForeignKey
ALTER TABLE `Music` ADD CONSTRAINT `Music_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Music` ADD CONSTRAINT `Music_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
