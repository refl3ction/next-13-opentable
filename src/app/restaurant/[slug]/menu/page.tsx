import RestaurantMenu from "@/components/Restaurant/Menu";
import RestaurantNavbar from "@/components/Restaurant/Navbar";
import { Item, PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

const fetchItems = async (slug: string) => {
  const restaurant = await primsa.restaurant.findUnique({
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

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const restaurant = await fetchItems(slug);
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
