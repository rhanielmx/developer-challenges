/*
  Warnings:

  - You are about to drop the column `sensor` on the `monitoring_points` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sensorId]` on the table `monitoring_points` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SensorModel" AS ENUM ('TcAg', 'TcAs', 'HF+');

-- AlterTable
ALTER TABLE "monitoring_points" DROP COLUMN "sensor",
ADD COLUMN     "sensorId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- DropEnum
DROP TYPE "Sensor";

-- CreateTable
CREATE TABLE "sensors" (
    "id" SERIAL NOT NULL,
    "model" "SensorModel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sensors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "monitoring_points_sensorId_key" ON "monitoring_points"("sensorId");

-- AddForeignKey
ALTER TABLE "monitoring_points" ADD CONSTRAINT "monitoring_points_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "sensors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
