import { Cuisine, Location, Restaurant, Review } from "@prisma/client";

export type RestaurantModel = Restaurant & {
  cuisine: Cuisine;
  location: Location;
  reviews: Review[];
};
