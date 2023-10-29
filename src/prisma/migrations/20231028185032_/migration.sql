-- CreateTable
CREATE TABLE "pets" (
    "name" VARCHAR(255),
    "owner" VARCHAR(255)
);

-- CreateTable
CREATE TABLE "product" (
    "title" VARCHAR(255),
    "producer" VARCHAR(255),
    "hardness" VARCHAR(255)
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "hardness" TEXT NOT NULL,
    "seasoning" BOOLEAN NOT NULL,
    "caloriesPer100" INTEGER NOT NULL,
    "proteinPer100" INTEGER NOT NULL,
    "rating" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
