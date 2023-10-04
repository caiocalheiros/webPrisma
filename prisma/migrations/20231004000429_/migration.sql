-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "user" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "RG" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "nomeDentista" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_user_key" ON "Paciente"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_RG_key" ON "Secretaria"("RG");
