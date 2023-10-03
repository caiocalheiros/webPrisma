import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

(async () => {
    const pacientes = await prisma.paciente.create({
        data: {
            nomePc: 'teste',
            senha: 123123,
            usuario: 'teste',
        },
    });
    console.log(pacientes);
})();