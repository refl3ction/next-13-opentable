import RestaurantDetails from "@/components/Restaurant/Details";
import RestaurantNavbar from "@/components/Restaurant/Navbar";
import ReservationCard from "@/components/Restaurant/ReservationCard";
import RestaurantReviews from "@/components/Restaurant/Reviews";
import { getRestaurantBySlug } from "@/lib/data/restaurant";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const restaurant = await getRestaurantBySlug(slug);
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
