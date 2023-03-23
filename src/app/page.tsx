import Header from "@/components/Header";
import Home from "@/components/Home";
import RestaurantCard from "@/components/Restaurant/Card";
import { Cuisine, Location, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantCardType {
  id: number;
  name: string;
  cuisine: Cuisine;
  location: Location;
  price: string;
  slug: string;
  main_image: string;
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      cuisine: true,
      price: true,
      location: true,
      slug: true,
      main_image: true,
    },
  });
  return restaurants;
};

export default async function HomePage() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header></Header>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
