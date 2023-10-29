import { PrismaClient } from "@prisma/client";

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

const prisma = global.prisma;

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export default prisma;
