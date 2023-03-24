import SearchCard from "@/components/Search/Card";
import SearchHeader from "@/components/Search/Header";
import SearchSidebar from "@/components/Search/Sidebar";
import { PrismaClient } from "@prisma/client";

export const metadata = {
  title: "Search Tables | OpenTable",
  description: "Generated by create next app",
};

const prisma = new PrismaClient();

const fetchRestaurants = async (
  location: string | undefined,
  cuisine: string | undefined
) => {
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
  if (location && location !== "") {
    where.location = {
      name: {
        contains: location.toLowerCase(),
      },
    };
  }

  if (cuisine && cuisine !== "") {
    where.cuisine = {
      name: {
        contains: cuisine.toLowerCase(),
      },
    };
  }

  const restaurants = await prisma.restaurant.findMany({
    select,
    where,
  });
  return restaurants;
};

const fetchLocations = async () => {
  const locations = await prisma.location.findMany({
    select: {
      name: true,
    },
  });
  return locations;
};

const fetchCuisines = async () => {
  const cuisines = await prisma.cuisine.findMany({
    select: {
      name: true,
    },
  });
  return cuisines;
};

export default async function Page({
  searchParams,
}: {
  searchParams: { location: string; cuisine: string };
}) {
  const { location, cuisine } = searchParams;
  const restaurants = await fetchRestaurants(location, cuisine);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar locations={locations} cuisines={cuisines} />
        <div className="w-5/6">
          {restaurants.length === 0 && <>No restaurants found</>}
          {restaurants.map((restaurant) => {
            return <SearchCard key={restaurant.id} restaurant={restaurant} />;
          })}
        </div>
      </div>
    </>
  );
}
