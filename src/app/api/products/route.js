import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(request) {
  const { searchTerm } = request.query;
  console.log(searchTerm);
  try {
    let products;
    if (searchTerm) {
      products = await prisma.product.findMany({
        where: {
          OR: [
            { title: { contains: sanitizedSearchTerm, mode: "insensitive" } },
            {
              producer: { contains: sanitizedSearchTerm, mode: "insensitive" },
            },
            {
              hardness: { contains: sanitizedSearchTerm, mode: "insensitive" },
            },
          ],
        },
      });
    } else {
      products = await prisma.product.findMany();
    }

    response.json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    response.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

export { handler as GET };
