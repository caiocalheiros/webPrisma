import { Prisma, Secretaria } from '@prisma/client';

export const Secretarias: Prisma.Model<Secretaria> = {
    name: 'Secretaria',
    properties: {
        nome: 'string',
        RG: 'int',
    },
};