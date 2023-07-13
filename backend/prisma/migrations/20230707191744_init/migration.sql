-- CreateTable
CREATE TABLE "MarketCap" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MarketCap_pkey" PRIMARY KEY ("id")
);
