import { Consulta, Prisma } from '@prisma/client';

export const Consultas: Prisma.Model<Consulta> = {
    name: 'Consulta',
    properties: {
        data: 'date',
        nomePcnte: 'string',
        nomeDents: 'string',
    },
};