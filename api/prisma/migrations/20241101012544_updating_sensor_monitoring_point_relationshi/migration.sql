/*
  Warnings:

  - You are about to drop the column `sensorId` on the `MonitoringPoint` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[monitoringPointId]` on the table `Sensor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `monitoringPointId` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MonitoringPoint" DROP CONSTRAINT "MonitoringPoint_sensorId_fkey";

-- DropIndex
DROP INDEX "MonitoringPoint_sensorId_key";

-- AlterTable
ALTER TABLE "MonitoringPoint" DROP COLUMN "sensorId";

-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "monitoringPointId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_monitoringPointId_key" ON "Sensor"("monitoringPointId");

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_monitoringPointId_fkey" FOREIGN KEY ("monitoringPointId") REFERENCES "MonitoringPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
