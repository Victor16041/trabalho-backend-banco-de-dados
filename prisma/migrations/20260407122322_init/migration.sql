-- CreateTable
CREATE TABLE "Personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "ki" INTEGER NOT NULL,
    "maxKi" INTEGER NOT NULL,
    "race" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Personagens_nome_key" ON "Personagens"("nome");
