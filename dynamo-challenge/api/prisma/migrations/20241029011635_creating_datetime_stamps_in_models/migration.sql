/*
  Warnings:

  - The primary key for the `Machine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MonitoringPoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Sensor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `Machine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MonitoringPoint` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MonitoringPoint" DROP CONSTRAINT "MonitoringPoint_machine_id_fkey";

-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_monitoring_point_id_fkey";

-- AlterTable
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Machine_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Machine_id_seq";

-- AlterTable
ALTER TABLE "MonitoringPoint" DROP CONSTRAINT "MonitoringPoint_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "machine_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MonitoringPoint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MonitoringPoint_id_seq";

-- AlterTable
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "monitoring_point_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Sensor_id_seq";

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_monitoring_point_id_fkey" FOREIGN KEY ("monitoring_point_id") REFERENCES "MonitoringPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitoringPoint" ADD CONSTRAINT "MonitoringPoint_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
