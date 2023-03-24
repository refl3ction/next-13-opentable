import { Cuisine, Location, Restaurant } from "@prisma/client";
import db from "./db";

export async function getRestaurants(): Promise<
  (Restaurant & {
    cuisine: Cuisine;
    location: Location;
  })[]
> {
  const result = await db.restaurant.findMany({
    include: {
      cuisine: true,
      location: true,
    },
  });
  return result;
}

export const getRestaurantsBy = async (query: {
  location?: string;
  cuisine?: string;
} = { location: "", cuisine: "" }) => {
  console.log("Query: ", query);
  const select = {
    id: true,
    name: true,
    description: true,
    price: true,
    main_image: true,
    location: true,
    cuisine: true,
    slug: true,
  };

  let where: { location?: any; cuisine?: any } = {};
  if (query.location && query.location !== "") {
    where.location = {
      name: {
        contains: query.location.toLowerCase(),
      },
    };
  }

  if (query.cuisine && query.cuisine !== "") {
    where.cuisine = {
      name: {
        contains: query.cuisine.toLowerCase(),
      },
    };
  }

  const restaurants = await db.restaurant.findMany({
    select,
    where,
  });
  return restaurants;
};

export const getRestaurantBySlug = async (
  slug: string,
): Promise<any> => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true,
    },
  });
  return restaurant;
};

export const getRestaurantMenu = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }
  return restaurant;
};
