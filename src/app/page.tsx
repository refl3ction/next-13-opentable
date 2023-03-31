import Header from "@/components/Header";
import RestaurantCard from "@/components/Restaurant/Card";
import { getRestaurants } from "@/lib/data/restaurant";

export default async function HomePage() {
  const restaurants = await getRestaurants();

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
