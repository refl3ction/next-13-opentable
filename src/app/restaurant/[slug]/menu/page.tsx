import RestaurantMenu from "@/components/Restaurant/Menu";
import RestaurantNavbar from "@/components/Restaurant/Navbar";
import { getRestaurantMenu } from "@/lib/data/restaurant";
import { Item } from "@prisma/client";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const restaurant = await getRestaurantMenu(slug);
  let items: Item[] = [];
  if (restaurant.items) {
    console.log("Restaurant menu:", restaurant.items);
    items = restaurant.items;
  }

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar slug={slug} />
      <RestaurantMenu items={items} />
    </div>
  );
}
