import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const searchTerm = req.query.searchTerm;

  // Check if searchTerm is undefined or null, set it to an empty string if so
  const sanitizedSearchTerm = searchTerm || "";

  try {
    const filteredData = await prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: sanitizedSearchTerm, mode: "insensitive" } },
          { producer: { contains: sanitizedSearchTerm, mode: "insensitive" } },
          { hardness: { contains: sanitizedSearchTerm, mode: "insensitive" } },
        ],
      },
    });
    res.json({ ok: true, filteredData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
