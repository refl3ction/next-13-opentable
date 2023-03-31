import { Cuisine, Location, PRICE, Restaurant, Review } from "@prisma/client";
import db from "./db";

export async function getRestaurants(): Promise<
  (Restaurant & {
    cuisine: Cuisine;
    location: Location;
    reviews: Review[];
  })[]
> {
  const result = await db.restaurant.findMany({
    include: {
      cuisine: true,
      location: true,
      reviews: true,
    },
  });
  return result;
}

export const getRestaurantsBy = async (
  query: {
    location?: string;
    cuisine?: string;
    price?: PRICE;
  } = { location: "", cuisine: "" }
) => {
  let where: any = {};
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

  if (query.price) {
    where.price = query.price;
  }

  const restaurants = await db.restaurant.findMany({
    where,
    include: {
      cuisine: true,
      location: true,
      reviews: true,
    },
  });
  return restaurants;
};

export const getRestaurantBySlug = async (
  slug: string
): Promise<(Restaurant & { reviews: Review[] }) | null> => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
    include: {
      reviews: true,
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
