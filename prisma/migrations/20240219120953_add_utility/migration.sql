-- CreateTable
CREATE TABLE "Utility" (
    "id" SERIAL NOT NULL,
    "forMonth" TIMESTAMP(3) NOT NULL,
    "electricity" INTEGER NOT NULL,
    "plumbing" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Utility_pkey" PRIMARY KEY ("id")
);
