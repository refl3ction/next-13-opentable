import RestaurantDetails from "@/components/Restaurant/Details";
import RestaurantNavbar from "@/components/Restaurant/Navbar";
import ReservationCard from "@/components/Restaurant/ReservationCard";
import RestaurantReviews from "@/components/Restaurant/Reviews";
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
}

const fetchRestaurantBySlug = async (
  slug: string
): Promise<Restaurant | null> => {
  const restaurant = await primsa.restaurant.findUnique({
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

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const restaurant = await fetchRestaurantBySlug(slug);
  if (!restaurant) {
    return {
      notFound: true,
    };
  }
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={slug} />
        <RestaurantDetails restaurant={restaurant} />
        <RestaurantReviews />
      </div>
      <ReservationCard />
    </>
  );
}
