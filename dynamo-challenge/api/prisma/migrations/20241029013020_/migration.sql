/*
  Warnings:

  - You are about to drop the column `monitoring_point_id` on the `Sensor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sensorId]` on the table `MonitoringPoint` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_monitoring_point_id_fkey";

-- AlterTable
ALTER TABLE "MonitoringPoint" ADD COLUMN     "sensorId" TEXT;

-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "monitoring_point_id";

-- CreateIndex
CREATE UNIQUE INDEX "MonitoringPoint_sensorId_key" ON "MonitoringPoint"("sensorId");

-- AddForeignKey
ALTER TABLE "MonitoringPoint" ADD CONSTRAINT "MonitoringPoint_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
