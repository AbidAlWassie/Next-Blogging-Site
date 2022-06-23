import { PrismaClient } from '@prisma/client';

    var prisma = PrismaClient | undefined;

    prisma = new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;