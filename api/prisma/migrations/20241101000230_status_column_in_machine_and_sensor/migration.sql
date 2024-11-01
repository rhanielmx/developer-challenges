-- CreateEnum
CREATE TYPE "MachineStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'ERROR');

-- CreateEnum
CREATE TYPE "SensorStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "status" "MachineStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "status" "SensorStatus" NOT NULL DEFAULT 'INACTIVE';
