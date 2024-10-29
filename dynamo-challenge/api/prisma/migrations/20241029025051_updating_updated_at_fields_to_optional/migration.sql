/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Machine` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Machine` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `MonitoringPoint` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `MonitoringPoint` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Sensor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Machine" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "MonitoringPoint" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
