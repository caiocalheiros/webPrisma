/*
  Warnings:

  - Added the required column `pacienteId` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secretariaId` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "nomeDentista" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "secretariaId" INTEGER NOT NULL,
    CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consulta" ("data", "id", "nomeDentista", "nomePaciente") SELECT "data", "id", "nomeDentista", "nomePaciente" FROM "Consulta";
DROP TABLE "Consulta";
ALTER TABLE "new_Consulta" RENAME TO "Consulta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
