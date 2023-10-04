import { PrismaClient } from '@prisma/client';

class SecretariaServices {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createSecretaria(nome: string, RG: number) {
        const secretaria = await this.prisma.secretaria.create({
            data: {
                nome,
                RG,
            },
        });
        return secretaria;
    }

    async readSecretaria(){
        const secretarias = await this.prisma.secretaria.findMany();
        return secretarias;
    }

    async readSecretariaById(id: number){
        const secretaria = await this.prisma.secretaria.findFirstOrThrow({
            where:{id}
        });

        return secretaria;
    }

    async updateSecretaria(id: number, nome: string, RG: number) {
        const secretaria = await this.prisma.secretaria.update({
            where: {
                id,
            },
            data: {
                nome,
                RG,
            },
        });
        return secretaria;
    }

    async deleteSecretaria(id: number) {
        await this.prisma.consulta.deleteMany({
            where: { secretariaId: id },
          });
        const secretaria = await this.prisma.secretaria.delete({
          where: {
            id,
          },
        });
        return secretaria;
      }
}

export default SecretariaServices