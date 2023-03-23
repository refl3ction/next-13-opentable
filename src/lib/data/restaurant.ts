import { PrismaClient, Restaurant } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRestaurants(): Promise<Restaurant[]> {
  const result = await prisma.restaurant.findMany({
    // select: {
    //   id: true,
    //   name: true,
    //   cuisine: true,
    //   price: true,
    //   location: true,
    //   slug: true,
    //   main_image: true,
    // },
  });
  return result;
}
