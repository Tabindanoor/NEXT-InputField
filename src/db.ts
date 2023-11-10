import { PrismaClient } from '@prisma/client';
import { global } from 'styled-jsx/css';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

function createPrismaClient() {
  const newPrisma = new PrismaClient({
    log: ['query'],
  });

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = newPrisma;
  }

  return newPrisma;
}