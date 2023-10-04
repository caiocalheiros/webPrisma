import { Paciente, Prisma } from '@prisma/client';

export const Pacientes: Prisma.Model<Paciente> = {
    name: 'Paciente',
    properties: {
        nomePcnte: 'string',
        senha: 'int',
        usuario: 'string',
    },
};