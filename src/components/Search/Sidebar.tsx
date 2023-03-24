import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

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

export default async function SearchSidebar() {
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => {
          return (
            <Link
              key={location.name}
              href={`/search?location=${location.name}`}
            >
              <p className="font-light text-reg capitalize">{location.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => {
          return (
            <Link key={cuisine.name} href={`/search?cuisine=${cuisine.name}`}>
              <p className="font-light text-reg capitalize">{cuisine.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
